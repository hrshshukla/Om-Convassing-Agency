import nodemailer from "nodemailer";

type NextApiReq = {
  method?: string;
  body?: any;
};

type NextApiRes = {
  status: (code: number) => NextApiRes;
  json: (obj: any) => NextApiRes;
  setHeader?: (name: string, value: string) => void;
};

// Basic HTML escape to avoid injection in email HTML
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: NextApiReq, res: NextApiRes) {
  try {
    if (req.method !== "POST") {
      res.setHeader && res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // create transporter using Gmail SMTP and App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,        // talktoharshshukla@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD // 16-char app password
      }
    });

    const html = `
      <h2>New website contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;">${escapeHtml(message)}</div>
    `;

    const text = `New website contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      text,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("send-mail error:", err?.message || err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
