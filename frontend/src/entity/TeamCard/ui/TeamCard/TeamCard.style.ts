import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const PrimaryText = styled(Typography)(({ theme }) => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.customColors.main,
  },
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  "&&": {
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
}));

export const MainText = styled(Typography)(() => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 500,
    color: "black",
  },
}));

export const CountryBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "14px",
  backgroundColor: grey[200],
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&&:last-child": { paddingBottom: "16px" },
}));

export const CustomCard = styled(Card)(() => ({
  marginTop: "16px",
  backgroundColor: grey[50],
  maxWidth: "536px",
}));

export const ContentWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const CustomCountryAvatar = styled(Avatar)(() => ({
  "&&": {
    width: "18px",
    height: "18px",
    marginRight: "5px",
  },
}));

export const CustomButton = styled(Button)(() => ({
  "&&": {
    marginRight: "4px",
  },
}));
