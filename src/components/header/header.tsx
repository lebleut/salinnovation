"use client";

import { Box, Link as MuiLink, Stack } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";

const navItems = [
    { href: "/", label: "Home", exact: true },
    { href: "/products", label: "Products" },
    { href: "/contact-us", label: "Contact Us" },
];

function isNavActive(pathname: string, href: string, exact?: boolean) {
    if (exact) {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

function getNavLinkSx(active: boolean) {
    return {
        color: "inherit",
        fontWeight: active ? 600 : 400,
        opacity: active ? 1 : 0.72,
        pb: 0.25,
        borderBottom: "2px solid",
        borderColor: active ? "currentColor" : "transparent",
        transition: "opacity 0.2s ease, border-color 0.2s ease",
        "&:hover": {
            opacity: 1,
        },
    };
}

function Header() {
    const pathname = usePathname();

    return (
        <Box component={"header"} py={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <NextLink href="/">
                    <img className="logo" src={logo.src} alt="SALI Innovation" width={"80px"} />
                </NextLink>

                <Stack direction={"row"} spacing={2}>
                    {navItems.map(({ href, label, exact }) => {
                        const active = isNavActive(pathname ?? "", href, exact);

                        return (
                            <MuiLink
                                key={href}
                                component={NextLink}
                                href={href}
                                underline="none"
                                sx={getNavLinkSx(active)}
                                aria-current={active ? "page" : undefined}
                            >
                                {label}
                            </MuiLink>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
}

export default Header;
