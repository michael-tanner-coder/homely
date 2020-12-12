import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#832161",
    },
    secondary: {
      main: "#3D2645",
    },
    error: {
      main: "#DA4167",
    },
    text: {
      primary: "#000000",
    },
    white: "#F0EFF4",
  },

  overrides: {
    MuiMenu: {
      paper: {
        backgroundColor: "#F0EFF4",
        borderRadius: "16px",
        padding: "0.8rem 1.2rem",
      },
    },
    MuiMenuItem: {
      root: {
        cursor: "pointer",
        fontSize: 12,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
