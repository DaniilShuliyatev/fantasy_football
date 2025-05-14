import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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

export const LeagueBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "13px",
  backgroundColor: grey[200],
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CardWrapper = styled(Box)(() => ({
  padding: "16px",
  backgroundColor: grey[50],
  width: "536px",
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${grey[300]}`,
  borderRadius: "4px",
}));

export const PrimaryText = styled(Typography)(({ theme }) => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.customColors.main,
  },
}));

export const VenueBlockWrapper = styled(Box)(() => ({
  borderTop: `1px solid ${grey[300]}`,
  marginTop: "16px",
  paddingTop: "16px",
  paddingBottom: "16px",
}));

export const CustomLeagueAvatar = styled(Avatar)(() => ({
  "&&": {
    width: "18px",
    height: "18px",
    marginRight: "5px",
  },
}));

export const TeamBlockWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CustomAvatar = styled(Avatar)(() => ({
  "&&": {
    borderRadius: "4px",
  },
}));

export const TeamStatisticsWrapper = styled(Box)(() => ({
  "&&": {
    paddingTop: "16px",
  },
}));
