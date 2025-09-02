import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILJET_API_KEY,
        pass: process.env.MAILJET_SECRET_KEY,
      },
    });

    const adminMailOptions = {
      from: "partner@taiora.ai",
      to: "tai-ora@outlook.com",
      subject: `New Partnership Inquiry from ${name}`,
      html: `
        <h2>New Partnership Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const confirmationMailOptions = {
      from: "partner@taiora.ai",
      to: email,
      subject: "Thank you for your interest in partnering with Tai Ora",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0f766e;">Kia ora ${name},</h2>
          <p>Thank you for your interest in partnering with Tai Ora. We've received your inquiry and will get back to you within 48 hours.</p>
          
          <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #14b8a6;">
            <p style="margin: 0; font-style: italic; color: #0f766e;">
              "Tai Ora: Truth in Beauty. Wellness with Purpose."
            </p>
          </div>
          
          <p>Your message:</p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0;">${message}</p>
          </div>
          
          <p>We're excited about the possibility of working together to create technology that uplifts people and communities.</p>
          
          <p>Ngā mihi,<br>
          Tania Pickering<br>
          Founder & CEO<br>
          Tai Ora</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
