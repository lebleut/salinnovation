import { Box, Link as MuiLink, Stack } from "@mui/material";
import NextLink from "next/link";
import logo from "../../../public/images/logo.png";

const navLinkSx = {
    color: "inherit",
    fontWeight: 400,
    "&:hover": {
        color: "text.secondary",
    },
};

function Header() {
    return (
        <Box component={"header"} py={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <NextLink href="/">
                    <img className="logo" src={logo.src} alt="SALI Innovation" width={"80px"} />
                </NextLink>

                <Stack direction={"row"} spacing={2}>
                    <MuiLink component={NextLink} href="/" underline="none" sx={navLinkSx}>
                        Home
                    </MuiLink>
                    <MuiLink component={NextLink} href="/products" underline="none" sx={navLinkSx}>
                        Products
                    </MuiLink>
                    <MuiLink component={NextLink} href="/contact-us" underline="none" sx={navLinkSx}>
                        Contact Us
                    </MuiLink>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Header;
