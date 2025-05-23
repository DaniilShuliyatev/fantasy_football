import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const IconBlock = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  "&&": {
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
}));

export const MainText = styled(Typography)(() => ({
  "&&": {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const PrimaryText = styled(Typography)(({ theme }) => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.customColors.main,
  },
}));

export const LeagueBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "13px",
  backgroundColor: grey[200],
  justifySelf: "end",
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
  marginBottom: "8px",
}));

export const CustomCard = styled(Card)(() => ({
  "&&": {
    marginTop: "16px",
    backgroundColor: grey[50],
    maxWidth: "928px",
  },
}));

export const CustomCardContent = styled(CardContent)(() => ({
  "&&: last-child": { paddingBottom: "16px" },
}));

export const CardHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CustomLeagueAvatar = styled(Avatar)(() => ({
  "&&": {
    width: "18px",
    height: "18px",
    marginRight: "5px",
  },
}));

export const CustomPlayerAvatar = styled(Avatar)(() => ({
  "&&": {
    borderRadius: "4px",
  },
}));
