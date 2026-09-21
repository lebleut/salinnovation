import { Box, Button, Card, CardContent, Chip, Link, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
    title: "SALI Innovation | WordPress, apps and digital products",
    description:
        "SALI Innovation creates digital products, WordPress plugins, and family-friendly apps such as LoolyTv, with a focus on user experience, quality, and practical product development.",
};

const services = [
    {
        title: "WordPress plugins",
        text: "Custom plugins and improvements for publishing sites, glossary tools, documentation experiences, and editorial workflows.",
    },
    {
        title: "Product design",
        text: "From concept to launch, we shape usable interfaces and digital experiences that feel intuitive from day one.",
    },
    {
        title: "Apps & family products",
        text: "We build products designed for real families and real users, with thoughtful UX, clarity, and safe digital experiences.",
    },
];

const productHighlights = [
    "WordPress integrations",
    "Custom interfaces",
    "SEO-friendly builds",
    "User-first product thinking",
    "Plugin development",
    "App product strategy",
];

const reasons = [
    "Product thinking rooted in real-world usage",
    "Focused on clean UX and sustainable architecture",
    "Strong technical execution with WordPress and modern web stacks",
    "A practical approach to building useful digital experiences",
];

export default function Home() {
    return (
        <Stack spacing={6} pb={4}>
            <Box
                component="section"
                sx={{
                    textAlign: "center",
                    py: 6,
                    minHeight: "calc( 100vh - 162px )",
                }}
            >
                <Stack spacing={5} alignItems="center">
                    <Typography variant="h1" fontWeight={300} lineHeight={"100%"}>
                        <span>
                            Take you<span style={{ opacity: "15%" }}>r</span> App
                        </span>
                    </Typography>
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="h3" color="gray" lineHeight={"100%"}>
                            To the Next level
                        </Typography>
                        <Typography variant="h4" color="gray" fontWeight={100}>
                            Of innovation
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Box
                component="section"
                sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    p: { xs: 3, md: 5 },
                    background: "linear-gradient(135deg, rgba(25,118,210,0.03), rgba(0,0,0,0))",
                }}
            >
                <Stack spacing={3}>
                    <Typography variant="overline" color="primary" letterSpacing={1.5} fontWeight={600}>
                        SALI Innovation
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: { xs: "2.3rem", md: "4rem" }, lineHeight: 1.05, fontWeight: 300 }}>
                        Building useful digital products for people, brands, and modern web experiences.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" fontWeight={300} maxWidth="52rem">
                        SALI Innovation helps businesses and product teams create thoughtful websites, WordPress tools,
                        plugins, and digital experiences that are easy to use, dependable, and built to grow.
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button component={NextLink} href="/products" variant="contained" size="large">
                            Explore our products
                        </Button>
                        <Button component={NextLink} href="/contact-us" variant="outlined" size="large">
                            Contact us
                        </Button>
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {productHighlights.map((item) => (
                            <Chip
                                key={item}
                                label={item}
                                size="small"
                                sx={{ bgcolor: "action.hover", color: "text.primary", fontWeight: 300 }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>

            <Box component="section">
                <Stack spacing={3}>
                    <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 300 }}>
                        What we do
                    </Typography>

                    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                        {services.map((service) => (
                            <Card key={service.title} sx={{ height: "100%", border: "1px solid", borderColor: "divider" }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h5" component="h3" gutterBottom fontWeight={400}>
                                        {service.title}
                                    </Typography>
                                    <Typography color="text.secondary" fontWeight={300} lineHeight={1.7}>
                                        {service.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            <Box component="section">
                <Stack spacing={3}>
                    <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 300 }}>
                        Featured work
                    </Typography>

                    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                        <Card sx={{ flex: 1, border: "1px solid", borderColor: "divider" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h4" component="h3" gutterBottom>
                                    LoolyTv
                                </Typography>
                                <Typography color="text.secondary" fontWeight={300} lineHeight={1.7}>
                                    A family-oriented digital product for children, designed to offer calm, curated, safe video
                                    experiences on mobile and connected screens.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                                    {['Kids', 'Family', 'Video', 'UX'].map((tag) => (
                                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: "action.hover" }} />
                                    ))}
                                </Stack>
                                <Box sx={{ mt: 2 }}>
                                    <Link href="https://www.loolytv.com/" target="_blank" rel="noopener noreferrer" underline="hover">
                                        Visit LoolyTv →
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{ flex: 1, border: "1px solid", borderColor: "divider" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h4" component="h3" gutterBottom>
                                    Tooltipy
                                </Typography>
                                <Typography color="text.secondary" fontWeight={300} lineHeight={1.7}>
                                    A WordPress plugin for glossary and keyword tooltips, built to improve reading flows, glossary
                                    experiences, and content understanding across editorial sites.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                                    {['WordPress', 'Plugin', 'Glossary', 'Tooltip'].map((tag) => (
                                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: "action.hover" }} />
                                    ))}
                                </Stack>
                                <Box sx={{ mt: 2 }}>
                                    <Link
                                        href="https://wordpress.org/plugins/bluet-keywords-tooltip-generator/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                    >
                                        View plugin →
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Stack>
                </Stack>
            </Box>

            <Box component="section">
                <Stack spacing={3}>
                    <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 300 }}>
                        Why teams choose SALI Innovation
                    </Typography>

                    <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3, color: "text.secondary" }}>
                        {reasons.map((reason) => (
                            <Typography key={reason} component="li" variant="body1" fontWeight={300} lineHeight={1.7}>
                                {reason}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            <Box
                component="section"
                sx={{
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    p: { xs: 3, md: 4 },
                    backgroundColor: "rgba(25,118,210,0.03)",
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h3" fontWeight={300}>
                        Need a reliable partner for a digital product, WordPress project, or app idea?
                    </Typography>
                    <Typography color="text.secondary" fontWeight={300}>
                        We help bring product ideas into usable, polished experiences that serve real users and business goals.
                    </Typography>
                    <Box>
                        <Button component={NextLink} href="/contact-us" variant="contained" size="large">
                            Talk with SALI Innovation
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
}
