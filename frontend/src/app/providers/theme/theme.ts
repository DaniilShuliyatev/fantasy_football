import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: blue[500],
    },
    error: {
      main: red[500],
    },
    text: {
      secondary: "#0000008A",
    },
    customColors: {
      main: "#0B79D0",
    },
  },
});
