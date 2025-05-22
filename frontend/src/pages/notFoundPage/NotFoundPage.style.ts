import { styled, Typography } from "@mui/material";
import { Link } from "react-router";

export const CustomTypography = styled(Typography)(() => ({
  "&&": {
    fontSize: "50px",
    textAlign: "center",
    marginTop: "40px",
  },
}));

export const CustomLink = styled(Link)(() => ({
  "&&": {
    display: "block",
    textAlign: "center",
  },
}));
