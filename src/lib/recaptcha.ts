const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_ACTION = "contact_submit";
const MIN_SCORE = 0.5;

type RecaptchaVerifyResponse = {
    success: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
};

export async function verifyRecaptchaToken(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!secret) {
        return { ok: false as const, error: "Recaptcha is not configured." };
    }

    const response = await fetch(RECAPTCHA_VERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            secret,
            response: token,
        }),
    });

    if (!response.ok) {
        return { ok: false as const, error: "Recaptcha verification failed." };
    }

    const data = (await response.json()) as RecaptchaVerifyResponse;

    if (!data.success) {
        return { ok: false as const, error: "Recaptcha verification failed." };
    }

    if (data.action !== RECAPTCHA_ACTION) {
        return { ok: false as const, error: "Recaptcha verification failed." };
    }

    if (typeof data.score === "number" && data.score < MIN_SCORE) {
        return { ok: false as const, error: "Recaptcha verification failed." };
    }

    return { ok: true as const };
}
