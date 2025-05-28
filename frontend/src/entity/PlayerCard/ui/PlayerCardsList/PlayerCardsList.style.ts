import { Box, styled } from "@mui/material";

export const CardsWrapper = styled(Box)(() => ({
  "&&": {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    position: "relative",
  },
}));

export const TriggerBox = styled(Box)(() => ({
  "&&": {
    position: "absolute",
    bottom: "600px",
  },
}));
