import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      services,
      budget,
      timeline,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Required fields are missing.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("New VizualZ Tech inquiry:", {
      name,
      email,
      company,
      phone,
      services,
      budget,
      timeline,
      message,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}