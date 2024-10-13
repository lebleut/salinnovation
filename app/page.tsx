import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
    return (
        <Stack textAlign={"center"} spacing={2}>
            <Typography variant="h1" fontWeight={300} lineHeight={"100%"}>
                <span>
                    Take you<span style={{ opacity: "15%" }}>r</span> App
                </span>
            </Typography>
            <Typography variant="h3" color="gray" lineHeight={"100%"}>
                To the Next level
            </Typography>
            <Typography variant="h4" color="gray" fontWeight={100}>
                Of innovation
            </Typography>
        </Stack>
    );
}
