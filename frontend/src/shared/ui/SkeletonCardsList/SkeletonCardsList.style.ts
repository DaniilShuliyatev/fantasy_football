import { Box, styled } from "@mui/material";

export const SkeletonsWrapper = styled(Box)(() => ({
  "&&": {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "32px",
  },
}));
