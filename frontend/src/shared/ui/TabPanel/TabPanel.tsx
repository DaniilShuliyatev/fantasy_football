import { Box } from "@mui/material";
import type { FC } from "react";

type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

export const TabPanel: FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && children}
  </Box>
);
