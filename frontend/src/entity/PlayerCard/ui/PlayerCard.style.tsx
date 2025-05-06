import {
  Avatar,
  Box,
  Card,
  CardContent,
  TableBody,
  TableCell,
  TableContainer,
  type TableContainerProps,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../app";

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

export const PrimaryText = styled(Typography)(() => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.customColors.contrastText,
  },
}));

export const LeagueBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "13px",
  backgroundColor: theme.palette.customColors.main,
  justifySelf: "end",
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
  marginBottom: "8px",
}));

export const CustomTableCell = styled(TableCell)(() => ({
  "&&": {
    padding: "6px 16px",
    fontSize: "14px",
    lineHeight: "24px",
  },
}));

export const CustomTableBody = styled(TableBody)(() => ({
  "&&": {
    backgroundColor: "#ffff",
  },
}));

export const CustomTableHead = styled(TableHead)(() => ({
  "&&": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CustomTableRow = styled(TableRow)(() => ({
  "&&": {
    maxHeight: "36px",
  },
}));

export const CustomTableContainer = styled(TableContainer)<TableContainerProps>(
  () => ({
    "&&": {
      marginTop: "8px",
    },
  }),
);

export const CustomCard = styled(Card)(() => ({
  "&&": {
    marginTop: "16px",
    backgroundColor: theme.palette.background.paper,
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
