import { NextRequest, NextResponse } from "next/server";

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

    console.log("New creator application received:", {
      name: body.name,
      email: body.email,
      socialMedia: body.socialMedia,
      reason: body.reason,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully!",
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
