"use client";

import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
    company: string;
};

const initialFormState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
};

function ContactForm() {
    const [form, setForm] = useState<FormState>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((current) => ({ ...current, [field]: event.target.value }));
        if (feedback) {
            setFeedback(null);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = (await response.json()) as { error?: string; success?: boolean };

            if (!response.ok) {
                throw new Error(data.error ?? "Unable to send your message.");
            }

            setForm(initialFormState);
            setFeedback({
                type: "success",
                message: "Your message has been sent. We'll get back to you soon.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error instanceof Error ? error.message : "Unable to send your message.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                p: { xs: 3, sm: 4 },
            }}
        >
            <Stack spacing={3}>
                <Stack spacing={1}>
                    <Typography variant="h3" fontWeight={300} lineHeight={1.2}>
                        Contact Us
                    </Typography>
                    <Typography color="text.secondary" fontWeight={300}>
                        Send us a message and we&apos;ll reply to{" "}
                        <Box component="span" sx={{ color: "text.primary" }}>
                            jamel@salinnovation.com
                        </Box>
                        .
                    </Typography>
                </Stack>

                {feedback && (
                    <Alert severity={feedback.type === "success" ? "success" : "error"}>{feedback.message}</Alert>
                )}

                <Stack spacing={2.5}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <TextField
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={updateField("name")}
                            required
                            fullWidth
                            autoComplete="name"
                            disabled={isSubmitting}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={updateField("email")}
                            required
                            fullWidth
                            autoComplete="email"
                            disabled={isSubmitting}
                        />
                    </Stack>

                    <TextField
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={updateField("subject")}
                        required
                        fullWidth
                        disabled={isSubmitting}
                    />

                    <TextField
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={updateField("message")}
                        required
                        fullWidth
                        multiline
                        minRows={5}
                        disabled={isSubmitting}
                    />

                    <Box
                        aria-hidden
                        sx={{
                            position: "absolute",
                            left: "-9999px",
                            width: 1,
                            height: 1,
                            overflow: "hidden",
                        }}
                    >
                        <TextField
                            label="Company"
                            name="company"
                            value={form.company}
                            onChange={updateField("company")}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </Box>
                </Stack>

                <Box>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{ minWidth: 160, fontWeight: 500 }}
                    >
                        {isSubmitting ? <CircularProgress size={22} color="inherit" /> : "Send message"}
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}

export default ContactForm;
