import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ErrorBoundary, theme, App } from "./app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <CssBaseline />
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
