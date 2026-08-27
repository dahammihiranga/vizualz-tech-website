import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const allowedServices = [
  "Web Development",
  "Web Applications",
  "Custom Software",
  "E-Commerce",
  "UI / UX Design",
  "Digital Solutions",
] as const;

const allowedBudgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short.")
    .max(100, "Name is too long."),

  email: z.string().trim().email("Invalid email address.").max(254),

  company: z.string().trim().max(150).optional().or(z.literal("")),

  phone: z.string().trim().max(50).optional().or(z.literal("")),

  services: z
    .array(z.enum(allowedServices))
    .max(allowedServices.length)
    .default([]),

  budget: z.enum(allowedBudgets).optional().or(z.literal("")),

  timeline: z.string().trim().max(100).optional().or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(20, "Please provide a little more information.")
    .max(5000, "Message is too long."),

  // Honeypot
  website: z.string().max(200).optional().default(""),

  startedAt: z.number(),
});

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    console.error("Upstash Redis is not configured.");

    return NextResponse.json(
      {
        error: "Spam protection is not configured.",
      },
      {
        status: 500,
      },
    );
  }

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

  if (!contactEmail) {
    console.error("CONTACT_EMAIL is not configured.");

    return NextResponse.json(
      {
        error: "Contact email is not configured.",
      },
      {
        status: 500,
      },
    );
  }

  const resend = new Resend(apiKey);

  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "vizualz-contact",
  });

  try {
    // -----------------------------------------------
    // Rate limiting
    // -----------------------------------------------

    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimitResult = await ratelimit.limit(`contact:${ip}`);

    if (!rateLimitResult.success) {
      console.warn(`Contact form rate limit exceeded for IP: ${ip}`);

      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
        },
      );
    }

    const body = await request.json();

    // -----------------------------------------------
    // Server-side validation
    // -----------------------------------------------

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      console.warn(
        "Invalid contact form submission:",
        validation.error.flatten(),
      );

      return NextResponse.json(
        {
          error: "Invalid form data.",
        },
        {
          status: 400,
        },
      );
    }

    const {
      name,
      email,
      company,
      phone,
      services,
      budget,
      timeline,
      message,
      website,
      startedAt,
    } = validation.data;

    // -----------------------------------------------
    // Honeypot spam protection
    // -----------------------------------------------

    if (website) {
      console.warn(`Honeypot spam blocked for IP: ${ip}`);

      // Pretend the submission succeeded.
      // This prevents bots from learning how they were detected.
      return NextResponse.json({
        success: true,
      });
    }

    // -----------------------------------------------
    // Submission speed protection
    // -----------------------------------------------

    const submissionTime = Date.now() - startedAt;

    if (submissionTime < 1200) {
      console.warn(
        `Suspiciously fast contact form submission blocked for IP: ${ip}`,
      );

      return NextResponse.json({
        success: true,
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeBudget = escapeHtml(budget || "Not specified");
    const safeTimeline = escapeHtml(timeline || "Not specified");

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const serviceList =
      Array.isArray(services) && services.length > 0
        ? services.map((service) => escapeHtml(service)).join(", ")
        : "Not specified";

    // ------------------------------------------------
    // 1. Send notification email to VizualZ Tech
    // ------------------------------------------------

    const adminEmail = await resend.emails.send({
      from: "VizualZ Tech <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: String(email),
      subject: `New Project Inquiry — ${String(name)}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            background: #0d0d0d;
            color: #ffffff;
            padding: 40px 20px;
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
                <span style="color:#ff1e1e;">VIZUALZ</span> TECH
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
                New inquiry from ${safeName}
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
                  <td style="padding:10px 0;color:#777777;">
                    Name
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Email
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Company
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safeCompany}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Phone
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Services
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${serviceList}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Budget
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safeBudget}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">
                    Timeline
                  </td>

                  <td style="padding:10px 0;color:#ffffff;">
                    ${safeTimeline}
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
                    margin: 0 0 10px;
                    color: #777777;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Project Details
                </p>

                <p
                  style="
                    margin: 0;
                    line-height: 1.7;
                    color: #eeeeee;
                  "
                >
                  ${safeMessage}
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

    if (adminEmail.error) {
      console.error("Admin inquiry email error:", adminEmail.error);

      return NextResponse.json(
        {
          error: "Unable to send inquiry email.",
        },
        {
          status: 500,
        },
      );
    }

    // ------------------------------------------------
    // 2. Send confirmation email to client
    // ------------------------------------------------

    const clientEmail = await resend.emails.send({
      from: "VizualZ Tech <onboarding@resend.dev>",
      to: [String(email)],
      subject: "We've received your project inquiry — VizualZ Tech",

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            background: #0d0d0d;
            padding: 40px 20px;
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
                padding: 30px 32px;
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
                <span style="color:#ff1e1e;">VIZUALZ</span> TECH
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #777777;
                  font-size: 12px;
                "
              >
                Ideas Made Visual. Technology Made Powerful.
              </p>
            </div>

            <div style="padding: 36px 32px;">
              <p
                style="
                  margin: 0;
                  color: #ff1e1e;
                  font-size: 12px;
                  font-weight: bold;
                  text-transform: uppercase;
                  letter-spacing: 1.5px;
                "
              >
                Project Inquiry Received
              </p>

              <h2
                style="
                  margin: 14px 0 0;
                  color: #ffffff;
                  font-size: 28px;
                "
              >
                Hi ${safeName},
              </h2>

              <p
                style="
                  margin-top: 22px;
                  color: #b5b5b5;
                  line-height: 1.8;
                  font-size: 15px;
                "
              >
                Thank you for getting in touch with VizualZ Tech.
                We've successfully received your project inquiry.
              </p>

              <p
                style="
                  margin-top: 16px;
                  color: #b5b5b5;
                  line-height: 1.8;
                  font-size: 15px;
                "
              >
                We'll review the information you've provided and get
                back to you with the best way forward.
              </p>

              <div
                style="
                  margin-top: 30px;
                  padding: 22px;
                  background: #0d0d0d;
                  border: 1px solid #252525;
                  border-radius: 14px;
                "
              >
                <p
                  style="
                    margin: 0 0 18px;
                    color: #777777;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.4px;
                  "
                >
                  Your Inquiry
                </p>

                <p
                  style="
                    margin: 0 0 10px;
                    color: #ffffff;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  <strong>Services:</strong>
                  ${serviceList}
                </p>

                <p
                  style="
                    margin: 0 0 10px;
                    color: #ffffff;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  <strong>Budget:</strong>
                  ${safeBudget}
                </p>

                <p
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  <strong>Timeline:</strong>
                  ${safeTimeline}
                </p>
              </div>

              <div
                style="
                  margin-top: 30px;
                  padding: 20px;
                  background: #101010;
                  border-left: 3px solid #ff1e1e;
                  border-radius: 10px;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    color: #777777;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                  "
                >
                  Your Project Details
                </p>

                <p
                  style="
                    margin: 0;
                    color: #b5b5b5;
                    line-height: 1.7;
                    font-size: 14px;
                  "
                >
                  ${safeMessage}
                </p>
              </div>

              <p
                style="
                  margin-top: 32px;
                  color: #b5b5b5;
                  line-height: 1.8;
                  font-size: 15px;
                "
              >
                We look forward to learning more about your project.
              </p>

              <p
                style="
                  margin-top: 26px;
                  color: #ffffff;
                  line-height: 1.6;
                "
              >
                Regards,<br />
                <strong style="color:#ff1e1e;">
                  VizualZ Tech
                </strong>
              </p>
            </div>

            <div
              style="
                padding: 22px 32px;
                background: #101010;
                border-top: 1px solid #252525;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #555555;
                  font-size: 11px;
                  text-align: center;
                "
              >
                © 2026 VizualZ Tech ·
                Ideas Made Visual. Technology Made Powerful.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Client confirmation is secondary.
    // If it fails, don't mark the original inquiry as failed.
    if (clientEmail.error) {
      console.error("Client confirmation email error:", clientEmail.error);
    }

    console.log("Admin inquiry email sent:", adminEmail.data);
    console.log("Client confirmation email result:", clientEmail.data);

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
