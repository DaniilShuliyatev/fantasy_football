import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import type { LinkProps } from "react-router";
import { Tab, type TabProps, Tabs } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const Header = styled("header")(() => ({
  height: "70px",
  backgroundColor: grey[900],
  color: "#ffff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 180px",
  fontWeight: 500,
  cursor: "default",
}));

export const LogoutButton = styled(Button)(() => ({
  "&&": {
    fontSize: "14px",
    fontWeight: 500,
  },
}));

export const CustomIcon = styled(ExitToAppOutlinedIcon)(() => ({
  "&&": {
    width: "15px",
    height: "15px",
    marginLeft: "8px",
  },
}));

export const CustomTabs = styled(Tabs)(() => ({
  minHeight: "48px",
  color: blue[500],
  padding: "0 180px",
  boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
}));

type CustomTabProp = TabProps & LinkProps;

export const CustomTab = styled(Tab)<CustomTabProp>(() => ({
  "&&": {
    maxWidth: "220px",
  },
}));
