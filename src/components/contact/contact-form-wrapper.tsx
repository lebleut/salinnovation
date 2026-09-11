"use client";

import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ContactForm from "./contact-form";

function ContactFormWithRecaptcha() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const getRecaptchaToken = async () => {
        if (!executeRecaptcha) {
            throw new Error("Recaptcha is not ready yet. Please try again.");
        }

        const token = await executeRecaptcha("contact_submit");

        if (!token) {
            throw new Error("Recaptcha verification failed. Please try again.");
        }

        return token;
    };

    return <ContactForm recaptchaReady={Boolean(executeRecaptcha)} getRecaptchaToken={getRecaptchaToken} />;
}

function ContactFormWrapper() {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        return (
            <ContactForm
                recaptchaReady={false}
                getRecaptchaToken={async () => {
                    throw new Error("Recaptcha is not configured.");
                }}
            />
        );
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <ContactFormWithRecaptcha />
        </GoogleReCaptchaProvider>
    );
}

export default ContactFormWrapper;
