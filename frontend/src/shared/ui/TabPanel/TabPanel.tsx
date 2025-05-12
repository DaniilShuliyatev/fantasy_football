import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type TabPanelProps = {
  dir?: string;
  index: number;
  value: number;
} & PropsWithChildren;

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
