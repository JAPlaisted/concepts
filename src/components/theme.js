import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(204 100% 5%)",
    },
    secondary: {
      main: "rgb(2, 24, 39)",
    },
  },
  background: {
    default: "#fff",
  },
});

export default theme;
