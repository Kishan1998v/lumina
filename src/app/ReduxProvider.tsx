// src/store/ReduxProvider.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, useAppSelector } from "../store/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "./theme";

function ThemeWrapper({ children }: { children: ReactNode }) {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
