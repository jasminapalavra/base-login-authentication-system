import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: "#009688",
      main: "#00695C",
      dark: "#004D40",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FF6D00",
      main: "#EF6C00",
      dark: "#E65100",
      contrastText: "#fff",
    },
    openTitle: "#000000",
    protectedTitle: "#396",
    type: "light",
  },
});

export default theme;
