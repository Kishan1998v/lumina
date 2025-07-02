// src/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

// Centralized color tokens
const getColorTokens = (mode: "light" | "dark") => ({
  primary: mode === "light" ? "#6750a4" : "#d0bcff",
  secondary: mode === "light" ? "#625b71" : "#ccc2dc",
  background: mode === "light" ? "#fef7ff" : "#1c1b1f",
  surface: mode === "light" ? "#ffffff" : "#2b2930",
  textPrimary: mode === "light" ? "#1c1b1f" : "#e6e1e5",
});

// Theme generator
export const createAppTheme = (mode: "light" | "dark") => {
  const colors = getColorTokens(mode);

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.textPrimary,
      },
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 28,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            padding: "10px 24px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            boxShadow: mode === "light" ? undefined : "0 1px 3px rgba(0,0,0,0.3)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
