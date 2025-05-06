import {
  Avatar,
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../../app";
import { grey } from "@mui/material/colors";

export const IconBlock = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const SecondaryText = styled(Typography)(() => ({
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
  backgroundColor: theme.palette.customColors.main,
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CardWrapper = styled(Box)(() => ({
  padding: "16px",
  backgroundColor: theme.palette.background.paper,
  width: "536px",
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${grey[300]}`,
  borderRadius: "4px",
}));

export const PrimaryText = styled(Typography)(() => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.customColors.contrastText,
  },
}));

export const VenueBlockWrapper = styled(Box)(() => ({
  borderTop: `1px solid ${grey[300]}`,
  marginTop: "16px",
  paddingTop: "16px",
  paddingBottom: "16px",
}));

export const CustomTableCell = styled(TableCell)(() => ({
  "&&": {
    padding: "6px 16px",
    fontSize: "14px",
    lineHeight: "24px",
  },
}));

export const CustomTableHead = styled(TableHead)(() => ({
  "&&": {
    backgroundColor: theme.palette.background.paper,
  },
}));
export const CustomTableBody = styled(TableBody)(() => ({
  "&&": {
    backgroundColor: "#ffff",
  },
}));

export const CustomTableRow = styled(TableRow)(() => ({
  "&&": {
    maxHeight: "36px",
  },
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
