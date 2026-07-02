import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  // honeypot
  website?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Basic spam honeypot: real users leave this empty.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 422 },
    );
  }

  if (!emailRe.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  // In production, forward this to your email/CRM provider (Resend, HubSpot,
  // Slack webhook, etc.). Configure the integration via environment variables.
  const lead = {
    name,
    email,
    phone: data.phone?.trim() ?? "",
    company: data.company?.trim() ?? "",
    service: data.service?.trim() ?? "",
    message,
    receivedAt: new Date().toISOString(),
  };

  console.info("[ScriptZen] New consultation lead:", lead);

  return NextResponse.json({
    ok: true,
    message: "Thanks! We'll be in touch within one business day.",
  });
}
