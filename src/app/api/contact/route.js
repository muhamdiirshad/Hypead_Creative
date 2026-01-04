import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    // --- Validation ---
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      throw new Error("Email environment variables not configured");
    }

    // --- Transporter ---
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // ===============================
    // 1️⃣ MAIL TO COMPANY
    // ===============================
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#132f34;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    // ===============================
    // 2️⃣ AUTO REPLY TO CLIENT
    // ===============================
    await transporter.sendMail({
      from: `"HYPEAD CREATIVE" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 🌟",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- HEADER (TEXT ONLY) -->
            <div style="background:#132f34; color:#ffffff; text-align:center; padding:24px;">
              <h2 style="margin:0; letter-spacing:1px;">HYPEAD CREATIVE</h2>
              <p style="margin:6px 0 0; font-size:14px; opacity:0.9;">
                Digital Growth Partner
              </p>
            </div>

            <!-- BODY -->
            <div style="padding:24px; color:#333;">
              <p>Hi ${name},</p>

              <p>
                Thank you for contacting <strong>Hypead Creative</strong>.
                We’ve received your message and our team will get back to you shortly.
              </p>

              <p>
                We appreciate your interest and look forward to connecting with you.
              </p>

              <p style="margin-top:20px;">
                Warm regards,<br/>
                <strong>Hypead Creative Team</strong><br/>
                Kannur, Kerala
              </p>
            </div>

            <!-- FOOTER -->
            <div style="background:#f1f3f4; text-align:center; padding:14px; font-size:12px; color:#555;">
              © ${new Date().getFullYear()} Hypead Creative. All rights reserved.
            </div>

          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
