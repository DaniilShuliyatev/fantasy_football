import { styled } from "@mui/material/styles";
import { ButtonGroup, Tab, Tabs } from "@mui/material";

export const PickYearWrapper = styled(ButtonGroup)(() => ({
  "&&": {
    marginTop: "24px",
    display: "block",
  },
}));

export const CustomTabs = styled(Tabs)(() => ({
  maxWidth: "220px",
  minHeight: "30px",
  color: "#2196F3",
  border: "1px solid #2196F3",
  borderRadius: "4px",
  marginTop: "24px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#2196F33D",
    height: "100%",
  },
}));

type CustomTabProps = {
  leftBorder?: boolean;
};

export const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "leftBorder",
})<CustomTabProps>(({ leftBorder }) => ({
  "&&": {
    opacity: 1,
    fontSize: "13px",
    lineHeight: "22px",
    paddingBottom: "4px",
    paddingTop: "4px",
    minHeight: "30px",
    borderLeft: leftBorder ? "1px solid #2196F3" : null,
  },
}));

export const CustomUl = styled("ul")(() => ({
  padding: 0,
}));
