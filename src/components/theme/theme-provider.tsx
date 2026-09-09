"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "media",
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
    typography: {
        fontFamily: "Arial, Helvetica, sans-serif",
    },
});

function AppThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    );
}

export default AppThemeProvider;
