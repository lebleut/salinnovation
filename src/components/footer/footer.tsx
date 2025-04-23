import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <footer>
            <Box textAlign={"center"}>
                <Typography>
                    {"\u00A9"} All rights reserved by SALI Innovation {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;
