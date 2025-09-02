import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface CreatorApplicationData {
  name: string;
  email: string;
  socialMedia: string;
  reason: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatorApplicationData = await request.json();
    if (!body.name || !body.email || !body.reason) {
      return NextResponse.json(
        { error: "Name, email, and reason are required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
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
      from: "creator-applications@taiora.ai",
      to: "tai-ora@outlook.com",
      subject: `New Creator Application: ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">New Creator Application Received</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Social Media:</strong> ${
            body.socialMedia || "Not provided"
          }</p>
          <p><strong>Application Reason:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #0d9488;">
            ${body.reason.replace(/\n/g, "<br>")}
          </div>
          <br>
          <p style="color: #6b7280; font-size: 14px;">This application was submitted through the Tai Ora creator application form.</p>
        </div>
      `,
    };

    const confirmationMailOptions = {
      from: "creator@taiora.ai",
      to: body.email,
      subject: "Thank you for your Tai Ora Creator Application",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">Kia ora ${body.name}!</h2>
          <p>Thank you for applying to join the Tai Ora creator community! We're excited to learn about your interest in authentic reviews.</p>
          
          <p>We've received your application with the following details:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Social Media:</strong> ${
              body.socialMedia || "Not provided"
            }</p>
            <p><strong>Your message:</strong></p>
            <div style="background-color: #e5e7eb; padding: 10px; border-radius: 3px; margin-top: 5px;">
              ${body.reason.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p>Our team will review your application and get back to you within 5-7 business days. We appreciate your patience as we carefully consider each application.</p>
          
          <p>If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:creator@taiora.ai">creator@taiora.ai</a>.</p>
          
          <p>Ngā mihi,<br>The Tai Ora Team</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">This is an automated message. Please do not reply to this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    console.log("New creator application received:", {
      name: body.name,
      email: body.email,
      socialMedia: body.socialMedia,
      reason: body.reason,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message:
          "Application submitted successfully! Check your email for confirmation.",
        status: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing creator application:", error);

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
