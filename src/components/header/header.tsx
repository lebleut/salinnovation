import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

function Header() {
    return (
        <Box component={"header"} py={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Link href="/">
                    <img className="logo" src={logo.src} alt="SALI Innovation" width={"80px"} />
                </Link>
                {/* Navigation */}

                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <Link href="/">Home</Link>
                    </Box>
                    <Box>
                        <Link href="/contact-us">Contact Us</Link>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Header;
