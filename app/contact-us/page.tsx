import ContactFormWrapper from "@/src/components/contact/contact-form-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | SALI Innovation",
    description: "Get in touch with SALI Innovation.",
};

function ContactUs() {
    return <ContactFormWrapper />;
}

export default ContactUs;
