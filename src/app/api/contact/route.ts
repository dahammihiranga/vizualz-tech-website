import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");

    return NextResponse.json(
      {
        error: "Email service is not configured.",
      },
      {
        status: 500,
      },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();

    const { name, email, company, phone, services, budget, timeline, message } =
      body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Required fields are missing.",
        },
        {
          status: 400,
        },
      );
    }

    const serviceList =
      Array.isArray(services) && services.length > 0
        ? services.join(", ")
        : "Not specified";

    const { data, error } = await resend.emails.send({
      from: "VizualZ Tech <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New Project Inquiry — ${name}`,
      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            background: #0d0d0d;
            color: #ffffff;
            padding: 40px;
          "
        >
          <div
            style="
              max-width: 650px;
              margin: auto;
              background: #151515;
              border: 1px solid #2a2a2a;
              border-radius: 20px;
              overflow: hidden;
            "
          >
            <div
              style="
                padding: 28px 32px;
                background: #111111;
                border-bottom: 3px solid #ff1e1e;
              "
            >
              <h1
                style="
                  margin: 0;
                  font-size: 24px;
                  color: #ffffff;
                "
              >
                VIZUALZ <span style="color:#ff1e1e;">TECH</span>
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #888888;
                  font-size: 13px;
                "
              >
                New Project Inquiry
              </p>
            </div>

            <div style="padding: 32px;">
              <h2
                style="
                  margin-top: 0;
                  font-size: 22px;
                  color: #ffffff;
                "
              >
                New inquiry from ${name}
              </h2>

              <table
                cellpadding="0"
                cellspacing="0"
                style="
                  width: 100%;
                  margin-top: 28px;
                  border-collapse: collapse;
                "
              >
                <tr>
                  <td style="padding:10px 0;color:#777777;">Name</td>
                  <td style="padding:10px 0;color:#ffffff;">${name}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Email</td>
                  <td style="padding:10px 0;color:#ffffff;">${email}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Company</td>
                  <td style="padding:10px 0;color:#ffffff;">
                    ${company || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Phone</td>
                  <td style="padding:10px 0;color:#ffffff;">
                    ${phone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Services</td>
                  <td style="padding:10px 0;color:#ffffff;">
                    ${serviceList}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Budget</td>
                  <td style="padding:10px 0;color:#ffffff;">
                    ${budget || "Not specified"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Timeline</td>
                  <td style="padding:10px 0;color:#ffffff;">
                    ${timeline || "Not specified"}
                  </td>
                </tr>
              </table>

              <div
                style="
                  margin-top: 28px;
                  padding: 20px;
                  background: #0d0d0d;
                  border-left: 3px solid #ff1e1e;
                  border-radius: 10px;
                "
              >
                <p
                  style="
                    margin:0 0 10px;
                    color:#777777;
                    font-size:12px;
                    text-transform:uppercase;
                  "
                >
                  Project Details
                </p>

                <p
                  style="
                    margin:0;
                    line-height:1.7;
                    color:#eeeeee;
                  "
                >
                  ${message}
                </p>
              </div>

              <p
                style="
                  margin-top: 30px;
                  font-size: 12px;
                  color: #666666;
                "
              >
                Submitted through the VizualZ Tech website.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send inquiry email.",
        },
        {
          status: 500,
        },
      );
    }

    console.log("Inquiry email sent:", data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Unable to process inquiry.",
      },
      {
        status: 500,
      },
    );
  }
}
