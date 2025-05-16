import { styled, Typography } from "@mui/material";

export const CustomHeaderTypography = styled(Typography)(() => ({
  "&&": {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 500,
    marginTop: "40px",
  },
}));
