import { styled } from "@mui/material/styles";
import { ButtonGroup, Tab, type TabProps, Tabs } from "@mui/material";
import { blue } from "@mui/material/colors";
import type { LinkProps } from "react-router";

export const PickYearWrapper = styled(ButtonGroup)(() => ({
  "&&": {
    marginTop: "24px",
    display: "block",
  },
}));

export const CustomTabs = styled(Tabs)(() => ({
  maxWidth: "220px",
  minHeight: "30px",
  color: blue[500],
  border: `1px solid ${blue[500]}`,
  borderRadius: "4px",
  marginTop: "24px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#2196F33D",
    height: "100%",
  },
}));

type CustomTabProp = TabProps & LinkProps;

export const CustomTab = styled(Tab)<CustomTabProp>(() => ({
  "&&": {
    opacity: 1,
    fontSize: "13px",
    lineHeight: "22px",
    paddingBottom: "4px",
    paddingTop: "4px",
    minHeight: "30px",
  },
  "&:first-of-type": {
    borderRight: `1px solid ${blue[500]}`,
  },
}));
