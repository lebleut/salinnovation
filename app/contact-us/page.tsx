import { Link, Stack, Typography } from "@mui/material";

function ContactUs() {
    return (
        <>
            <Stack>
                <Stack direction={"row"}>
                    <Typography>Email :</Typography>
                    <Link href="mailto:jamel@salinnovation.com">jamel@salinnovation.com</Link>
                </Stack>
                <Stack direction={"row"}>
                    <Typography>Tel :</Typography>
                    <Link href="tel:+216 24 863 233">(+216) 24 863 233</Link>
                </Stack>
            </Stack>
        </>
    );
}

export default ContactUs;
