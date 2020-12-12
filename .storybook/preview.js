import React from "react";
import theme from "theme";
import { ThemeProvider } from "@material-ui/styles";
import { StylesProvider } from "@material-ui/core/styles";
import GlobalStyles from "globalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          ></link>
        </div>
        <GlobalStyles />
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </StylesProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
