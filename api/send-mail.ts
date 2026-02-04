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

/**
 * Serverless handler - supports only POST.
 * Expects JSON body: { name, email, company?, phone?, message }
 */
export default async function handler(req: any, res: any) {
  try {
    // Quick env presence log (helps debugging in Vercel logs)
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

    // Basic server-side validation
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

    // Create Nodemailer transporter using Gmail SMTP and App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Subject line (include company if provided)
    const subject = `Website inquiry from ${String(name)}${company ? ` — ${company}` : ""}`;

    // HTML body (styled to match the contact form UI)
    const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>New website contact</title>
        </head>
        <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; padding:24px; background:#f6f7fb;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px; margin:0 auto; background:transparent;">
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e6e9ef;">
                  <!-- Header -->
                  <tr>
                    <td style="padding:20px 24px; background:linear-gradient(90deg,#0f172a,#0b1220); color:#fff;">
                      <h2 style="margin:10px 0 0; font-size:20px; line-height:1.1;">New inquiry received</h2>
                    </td>
                  </tr>

                  <!-- Body: two-column -->
                  <tr>
                    <td style="padding:20px 24px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <!-- Left column: contact info (static) -->
                          <td style="vertical-align:top; width:40%; padding-right:16px;">
                            <div style="font-size:13px; color:#6b7280; margin-bottom:8px;">Typical response: within 1 business day</div>
                          </td>

                          <!-- Right column: submitted data -->
                          <td style="vertical-align:top; width:60%; padding-left:16px; border-left:1px solid #f1f5f9;">
                            <div style="font-weight:700; margin-bottom:8px; font-size:15px;">Inquiry details</div>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#111827;">
                              <tr>
                                <td style="padding:8px 0; vertical-align:top; width:28%; color:#6b7280;">Full name</td>
                                <td style="padding:8px 0; vertical-align:top;"><strong>${escapeHtml(name)}</strong></td>
                              </tr>

                              <tr>
                                <td style="padding:8px 0; vertical-align:top; color:#6b7280;">Email</td>
                                <td style="padding:8px 0; vertical-align:top;"><a href="mailto:${escapeHtml(email)}" style="color:#0f172a; text-decoration:none;">${escapeHtml(email)}</a></td>
                              </tr>

                              <tr>
                                <td style="padding:8px 0; vertical-align:top; color:#6b7280;">Company</td>
                                <td style="padding:8px 0; vertical-align:top;">${escapeHtml(company || "—")}</td>
                              </tr>

                              <tr>
                                <td style="padding:8px 0; vertical-align:top; color:#6b7280;">Phone</td>
                                <td style="padding:8px 0; vertical-align:top;">${escapeHtml(phone || "—")}</td>
                              </tr>

                              <tr>
                                <td style="padding:8px 0; vertical-align:top; color:#6b7280;">Message</td>
                                <td style="padding:8px 0; vertical-align:top;">
                                  <div style="white-space:pre-wrap; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #eef2f7; color:#111827;">
                                    ${escapeHtml(message)}
                                  </div>
                                </td>
                              </tr>
                            </table>

                            
                          </td>
                        </tr>
                      </table>
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
      from: `"Website Contact" <${GMAIL_USER}>`,
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
