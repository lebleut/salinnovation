import { Box, Chip, Link, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Products | SALI Innovation",
    description: "Discover apps built by SALI Innovation, including LoolyTv — curated kids video for Android.",
};

function Products() {
    return (
        <Stack spacing={5}>
            <Stack spacing={1}>
                <Typography variant="h3" fontWeight={300} lineHeight={1.2}>
                    Our Products
                </Typography>
                <Typography color="text.secondary" fontWeight={300}>
                    Apps crafted with care by SALI Innovation.
                </Typography>
            </Stack>

            <Box
                sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    p: { xs: 3, sm: 4 },
                }}
            >
                <Stack spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap" useFlexGap>
                        <Typography variant="h4" fontWeight={400}>
                            LoolyTv
                        </Typography>
                        <Chip label="Android" size="small" variant="outlined" sx={{ fontWeight: 300 }} />
                    </Stack>

                    <Typography color="text.secondary" fontWeight={300} lineHeight={1.7} maxWidth="36rem">
                        LoolyTv brings carefully curated kids videos to Android phones, tablets, and TV. A calm,
                        ad-free experience where parents choose the content and kids explore freely — no wild
                        scrolling, no surprises.
                    </Typography>

                    <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                        <Typography component="li" variant="body2" fontWeight={300}>
                            Curated Made for Kids catalog, reviewed by our team
                        </Typography>
                        <Typography component="li" variant="body2" fontWeight={300}>
                            Family library that syncs across phone, tablet, and TV
                        </Typography>
                        <Typography component="li" variant="body2" fontWeight={300}>
                            No ads — built for families, with parents in control
                        </Typography>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
                        <Link
                            href="https://www.loolytv.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            fontWeight={400}
                            color="primary"
                        >
                            loolytv.com →
                        </Link>

                        <Box
                            aria-disabled
                            title="Coming soon on Google Play"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 2,
                                py: 0.75,
                                borderRadius: 1,
                                border: "1px solid",
                                borderColor: "divider",
                                color: "text.secondary",
                                cursor: "not-allowed",
                                opacity: 0.7,
                                userSelect: "none",
                                width: "fit-content",
                            }}
                        >
                            <Box
                                component="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden
                                sx={{ width: 18, height: 18, flexShrink: 0 }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5m13.81-5.38L6.05 21.34 14.54 12.85 16.81 15.12m3.35-4.31c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.27 1.31-2.5-2.5 2.27-1.31 2.5 2.5M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66Z"
                                />
                            </Box>
                            <Typography variant="body2" color="inherit">
                                Google Play
                            </Typography>
                            <Typography variant="caption" color="inherit" sx={{ opacity: 0.8 }}>
                                Coming soon
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Products;
