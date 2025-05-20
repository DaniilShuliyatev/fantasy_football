import type { FC } from "react";
import { CustomTypography } from "./CustomHeaderTypography.style";

type CustomHeaderTypographyProps = {
  title: string;
};

export const CustomHeaderTypography: FC<CustomHeaderTypographyProps> = ({
  title,
}) => <CustomTypography>{title}</CustomTypography>;
