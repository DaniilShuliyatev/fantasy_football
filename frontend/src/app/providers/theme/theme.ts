import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#2196F3",
    },
    error: {
      main: "#F44336",
    },
    text: {
      secondary: "#0000008A",
    },
    background: {
      paper: '#FAFAFA'
    },
    customColors: {
      main: "#EEEEEE",
      contrastText: "#0B79D0"
    }
  },
});
