import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CATEGORIES = [
  "Suggestion",
  "Complaint",
  "Academic issue",
  "Welfare",
  "Other",
];

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, category, message, anonymous, website } = body as {
    name?: string;
    email?: string;
    category?: string;
    message?: string;
    anonymous?: boolean;
    website?: string;
  };

  // Honeypot: real users never fill this hidden field, bots do
  if (website) return NextResponse.json({ ok: true });

  const msg = (message ?? "").trim();
  if (msg.length < 10 || msg.length > 2000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  }
  if (!category || !CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Choose a category." }, { status: 400 });
  }

  const isAnonymous = Boolean(anonymous);
  const senderName = (name ?? "").trim();
  const senderEmail = (email ?? "").trim();

  if (!isAnonymous) {
    if (senderName.length < 2 || senderName.length > 100) {
      return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    }
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("MAIL_USER or MAIL_APP_PASSWORD is not set.");
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const from = isAnonymous
    ? "Anonymous student"
    : `${senderName} <${senderEmail}>`;

  try {
    await transporter.sendMail({
      from: `"FINSA Cloud" <${user}>`,
      to: process.env.MAIL_TO || user,
      replyTo: isAnonymous ? undefined : senderEmail,
      subject: `[Student Voice] ${category}`,
      text: `From: ${from}\nCategory: ${category}\n\n${msg}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(from)}</p>
        <p><strong>Category:</strong> ${escapeHtml(category)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(msg)}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 }
    );
  }
}