import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

function Header() {
    return (
        <Box component={"header"} py={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography variant="h6">SALI Innovation</Typography>
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
