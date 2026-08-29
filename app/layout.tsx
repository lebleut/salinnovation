import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import { Box, Divider, Stack, SxProps } from "@mui/material";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import { Analytics } from "@vercel/analytics/next"


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "SALI Innovation",
    description: "Take your App to the Next Level of innovation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const mainStyle: SxProps = {
        maxWidth: "800px",
        marginRight: "auto",
        marginLeft: "auto",
        p: "0rem 1rem 1rem 1rem",
    };
    return (
        <html lang="en">
            <head>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=G-KP2TV9NQZH`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-KP2TV9NQZH');
                        `,
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Stack direction={"column"} spacing={2} minHeight={"100vh"} justifyContent={"space-between"} sx={mainStyle}>
                    <Stack direction={"column"} spacing={4}>
                        <Box>
                            <Header />
                            <Divider orientation="horizontal" flexItem />
                        </Box>

                        <Box>{children}</Box>
                    </Stack>
                    <Footer />
                </Stack>
                <Analytics />
            </body>
        </html>
    );
}
