import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hello@taiora.ai",
      subject: "🎉 New Waitlist Signup - Taiora AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e;">New Waitlist Signup</h2>
          <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; border-left: 4px solid #14b8a6;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
            This email was automatically generated from your waitlist form.
          </p>
        </div>
      `,
    };

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to the Taiora AI Waitlist! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Welcome to Taiora AI, ${name}!</h2>
          <div style="background-color: #fffbeb; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
            <p>You'll be among the first to know when we launch. Stay tuned for updates!</p>
          </div>
          <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Best regards,<br>
              The Taiora AI Team
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({
      message: "Successfully joined waitlist",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
