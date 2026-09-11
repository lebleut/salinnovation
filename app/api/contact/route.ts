import { verifyRecaptchaToken } from "@/src/lib/recaptcha";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTACT_TO = "jamel@salinnovation.com";

type ContactPayload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    company?: string;
    recaptchaToken?: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;

    if (!apiKey || !from) {
        return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    let body: ContactPayload;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (company) {
        return NextResponse.json({ success: true });
    }

    const recaptchaToken = body.recaptchaToken?.trim() ?? "";

    if (!recaptchaToken) {
        return NextResponse.json({ error: "Recaptcha verification failed." }, { status: 400 });
    }

    const recaptcha = await verifyRecaptchaToken(recaptchaToken);

    if (!recaptcha.ok) {
        return NextResponse.json({ error: recaptcha.error }, { status: 403 });
    }

    if (!name || name.length < 2 || name.length > 100) {
        return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }

    if (!email || !isValidEmail(email) || email.length > 254) {
        return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!subject || subject.length < 3 || subject.length > 150) {
        return NextResponse.json({ error: "Please enter a subject (3–150 characters)." }, { status: 400 });
    }

    if (!message || message.length < 10 || message.length > 5000) {
        return NextResponse.json({ error: "Please enter a message (10–5000 characters)." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
        from,
        to: [CONTACT_TO],
        replyTo: email,
        subject: `[SALI Innovation] ${subject}`,
        html: `
            <h2>New contact form message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
        `,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
}
