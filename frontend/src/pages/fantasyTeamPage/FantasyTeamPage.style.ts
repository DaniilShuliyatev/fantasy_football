import { Box, styled, Typography, type TypographyProps } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  marginTop: "24px",
  maxWidth: "536px",
  alignItems: "center",
  justifyContent: "space-between",
}));

type CustomTypographyProps = TypographyProps;
export const HeaderText = styled(Typography)<CustomTypographyProps>(() => ({
  "&&": {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 500,
  },
}));

export const CustomAddCircleOutlineIcon = styled(AddCircleOutlineIcon)(
  ({ theme }) => ({
    "&&": {
      width: "20px",
      height: "20px",
      color: theme.palette.primary.main,
      paddingRight: "5px",
      cursor: "pointer",
    },
  }),
);
