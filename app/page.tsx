import { Stack, Typography } from "@mui/material";

export default function Home() {
    return (
        <Stack textAlign={"center"} spacing={2}>
            <Typography variant="h1" fontWeight={300}>
                Take you App
            </Typography>
            <Typography variant="h2" color="gray">
                To the Next level
            </Typography>
            <Typography variant="h3" color="gray" fontWeight={100}>
                Of innovation
            </Typography>
        </Stack>
    );
}
