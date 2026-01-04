import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // --- Validate inputs ---
    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    // --- Configure Gmail transporter properly (port 587 avoids ETIMEDOUT) ---
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // use TLS
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Message to company owner ---
    const companyMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; background: #f8f9fa; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <div style="background: #132f34; color: white; text-align: center; padding: 20px;">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="padding: 20px; color: #333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <div style="text-align: center; padding: 15px; background: #f1f3f4; font-size: 0.9em; color: #777;">
              <p>This message was submitted via your website contact form.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(companyMailOptions);

    // --- Branded auto-reply ---
    const logoUrl =
      process.env.COMPANY_LOGO_URL ||
      "https://res.cloudinary.com/dujnfohmk/image/upload/v1762940005/Gemini_Generated_Image_prjfs8prjfs8prjf_oxflzs.png"; // fallback image

    const autoReplyMailOptions = {
      from: `"HYPEAD CREATIVE" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 🌟",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; background: #f4f6f8; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            
            <!-- HEADER -->
            <div style="background: #132f34; color: white; text-align: center; padding: 25px;">
              <img src="${logoUrl}" alt="HYPEAD CREATIVE Logo" style="width: 100px; margin-bottom: 10px;" />
              <h2 style="margin: 0;">HYPEAD CREATIVE</h2>
            </div>

            <!-- BODY -->
            <div style="padding: 25px; color: #333;">
              <h3 style="color: #132f34;">Hi ${name},</h3>
              <p>Thank you for getting in touch with us!</p>
              <p>We’ve received your message and our team will respond shortly.</p>
              <p>We truly appreciate your interest and look forward to connecting with you soon.</p>

              <p style="margin-top: 20px;">Best regards,</p>
              <p><strong>HYPEAD CREATIVE Team</strong><br/>
              Kannur, Kerala<br/>
              <a href="mailto:${process.env.EMAIL_USER}" style="color: #132f34; text-decoration: none;">${process.env.EMAIL_USER}</a></p>
            </div>

            <!-- FOOTER -->
            <div style="background: #f1f3f4; text-align: center; padding: 15px; font-size: 0.9em; color: #555;">
              <p>Follow us on:</p>
              <p>
                <a href="https://www.linkedin.com/in/hype-ad-21a64b3a2/" style="margin: 0 8px; color: #132f34; text-decoration: none;">LinkedIn</a> |
                <a href="https://www.instagram.com/hypead.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style="margin: 0 8px; color: #132f34; text-decoration: none;">Instagram</a> |
                <a href="https://hypedcreativity.com" style="margin: 0 8px; color: #132f34; text-decoration: none;">Website</a>
              </p>
              <p>© ${new Date().getFullYear()} HYPEAD CREATIVE. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyMailOptions);

    return Response.json(
      { success: true, message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "Failed to send emails.", details: error.message },
      { status: 500 }
    );
  }
}
