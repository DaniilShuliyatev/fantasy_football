import type { FC } from "react";
import { CustomTypography } from "./CustomHeaderTypography.style";

type CustomHeaderTypographyProps = {
  title: string;
  color?: string;
};

export const CustomHeaderTypography: FC<CustomHeaderTypographyProps> = ({
  title,
  ...otherProps
}) => <CustomTypography {...otherProps}>{title}</CustomTypography>;
