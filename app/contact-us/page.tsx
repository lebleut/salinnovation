import ContactForm from "@/src/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | SALI Innovation",
    description: "Get in touch with SALI Innovation.",
};

function ContactUs() {
    return <ContactForm />;
}

export default ContactUs;
