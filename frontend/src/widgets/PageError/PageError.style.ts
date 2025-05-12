import { Box, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const PageErrorWrapper = styled(Box)(() => ({
  textAlign: "center",
  marginTop: "50px",
}));

export const TextError = styled(Typography)(() => ({
  "&&": {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
  },
}));

export const ReloadButton = styled(Button)(() => ({
  "&&": {
    color: red[500],
    borderColor: red[500],
    marginTop: "15px",
  },
}));
