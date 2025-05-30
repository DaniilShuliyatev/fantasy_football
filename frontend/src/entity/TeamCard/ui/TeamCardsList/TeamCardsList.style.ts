import { Box, styled } from "@mui/material";

export const CardsWrapper = styled(Box)(() => ({
  "&&": {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
}));

export const CustomUl = styled("ul")(() => ({
  padding: 0,
}));
