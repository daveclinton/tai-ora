import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  enquiryType?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
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
      from: "contact@taiora.ai",
      to: "tai-ora@outlook.com",
      subject: `New Contact Form Submission: ${
        body.enquiryType || "General Enquiry"
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Enquiry Type:</strong> ${
            body.enquiryType || "Not specified"
          }</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #0d9488;">
            ${body.message.replace(/\n/g, "<br>")}
          </div>
          <br>
          <p style="color: #6b7280; font-size: 14px;">This message was sent from the Tai Ora contact form.</p>
        </div>
      `,
    };

    const confirmationMailOptions = {
      from: "contact@taiora.ai",
      to: body.email,
      subject: "Thank you for contacting Tai Ora",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">Thank you for reaching out, ${
            body.name
          }!</h2>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message for your records:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #0d9488;">
            ${body.message.replace(/\n/g, "<br>")}
          </div>
          <br>
          <p>If you have any urgent inquiries, please feel free to email us directly at <a href="mailto:hello@taiora.ai">hello@taiora.ai</a>.</p>
          <p>Best regards,<br>The Tai Ora Team</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">This is an automated message. Please do not reply to this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    console.log("New contact form submission:", {
      name: body.name,
      email: body.email,
      enquiryType: body.enquiryType || "Not specified",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message:
          "Message sent successfully! You should receive a confirmation email shortly.",
        status: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
