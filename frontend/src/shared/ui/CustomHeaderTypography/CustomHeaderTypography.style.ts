import { styled, Typography, type TypographyProps } from "@mui/material";

export const CustomTypography = styled(Typography)<TypographyProps>(() => ({
  "&&": {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 500,
    marginTop: "40px",
  },
}));
