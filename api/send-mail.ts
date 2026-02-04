// api/send-mail.ts
import nodemailer from "nodemailer";

/**
 * Basic HTML escape to avoid injection in the email HTML.
 */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: any, res: any) {
  try {
    // Debug: show whether env vars exist in logs (helpful while testing)
    console.log("ENV CHECK", {
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_APP_PASSWORD,
      hasReceiver: !!process.env.RECEIVER_EMAIL,
    });

    if (req.method !== "POST") {
      res.setHeader && res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, company = "", phone = "", message } = req.body || {};

    // Server-side validation
    const fieldErrors: Record<string, string> = {};
    if (!name || String(name).trim().length < 2) fieldErrors.name = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) fieldErrors.email = "Please enter a valid email address.";
    if (!message || String(message).trim().length < 10) fieldErrors.message = "Please provide a short message (10+ characters).";

    if (Object.keys(fieldErrors).length) {
      return res.status(400).json({ error: "Validation failed", fieldErrors });
    }

    // Ensure required env vars exist
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !RECEIVER_EMAIL) {
      console.error("Missing required environment variables for send-mail.");
      return res.status(500).json({ error: "Server misconfiguration: missing email settings." });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const subject = `New Inquiry Received ${String(name)}${company ? ` — ${company}` : ""}`;

    // HTML: single-column, wider, larger text, header color #1acb5b
    const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>New website contact</title>
        </head>
        <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; padding:28px; background:#f6f7fb; color:#0f172a;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:900px; margin:0 auto; background:transparent;">
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e6e9ef;">
                  <!-- Header -->
                  <tr>
                    <td style="padding:22px 28px; background:linear-gradient(90deg,#0f371f,#0b2114); color:#ffffff;">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <div style="background:rgba(255,255,255,0.08); padding:6px 12px; border-radius:999px; font-weight:700; font-size:14px;">
                          New inquiry received
                        </div>
                      </div>
                      <h2 style="margin:10px 0 0; font-size:22px; line-height:1.15; font-weight:700;">Om Convessing Agency</h2>
                    </td>
                  </tr>

                  <!-- Body: single column with submitted data -->
                  <tr>
                    <td style="padding:22px 28px;">
                      <div style="font-size:15px; color:#374151; margin-bottom:12px;">Typical response: within 1 business day</div>

                      <div style="background:#f8fafc; padding:14px; border-radius:10px; border:1px solid #eef2f7; margin-bottom:16px;">
                        <div style="font-weight:700; margin-bottom:8px; font-size:16px;">Inquiry details</div>

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px; color:#0f172a;">
                          <tr>
                            <td style="padding:10px 0; vertical-align:top; width:26%; color:#6b7280;">Full name</td>
                            <td style="padding:10px 0; vertical-align:top;"><strong>${escapeHtml(name)}</strong></td>
                          </tr>

                          <tr>
                            <td style="padding:10px 0; vertical-align:top; color:#6b7280;">Email</td>
                            <td style="padding:10px 0; vertical-align:top;"><a href="mailto:${escapeHtml(email)}" style="color:#0f172a; text-decoration:none;">${escapeHtml(email)}</a></td>
                          </tr>

                          <tr>
                            <td style="padding:10px 0; vertical-align:top; color:#6b7280;">Company</td>
                            <td style="padding:10px 0; vertical-align:top;">${escapeHtml(company || "—")}</td>
                          </tr>

                          <tr>
                            <td style="padding:10px 0; vertical-align:top; color:#6b7280;">Phone</td>
                            <td style="padding:10px 0; vertical-align:top;">${escapeHtml(phone || "—")}</td>
                          </tr>

                          <tr>
                            <td style="padding:10px 0; vertical-align:top; color:#6b7280;">Message</td>
                            <td style="padding:10px 0; vertical-align:top;">
                              <div style="white-space:pre-wrap; background:#ffffff; padding:14px; border-radius:8px; border:1px solid #eef2f7; color:#0f172a; font-size:15px; line-height:1.5;">
                                ${escapeHtml(message)}
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div style="margin-top:14px; font-size:13px; color:#6b7280;">
                          Reply-to is set to the sender's email so your reply goes directly to them.
                        </div>
                      </div>

                      <div style="font-size:13px; color:#6b7280;">
                        This email was generated from your website contact form. If you believe this message is spam, please ignore.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Plain-text fallback
    const text = `
New website contact

Name: ${name}
Email: ${email}
Company: ${company || "—"}
Phone: ${phone || "—"}

Message:
${message}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"Om Convessing Agency " <${GMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("send-mail error:", err);
    const message = err?.message || "Failed to send email";
    return res.status(500).json({ error: "Failed to send. " + message });
  }
}
