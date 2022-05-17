import * as React from "react";
import { AppRoutes } from "components";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme-provider";
export default function AuthProviders() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}
