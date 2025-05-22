import type { FC } from "react";
import { RoutePaths } from "../../shared";
import { CustomLink, CustomTypography } from "./NotFoundPage.style";
import { Button } from "@mui/material";

const NotFoundPage: FC = () => {
  return (
    <>
      <CustomTypography>404 Page</CustomTypography>
      <CustomLink to={RoutePaths.statistics_teams}>
        <Button variant="contained" size="medium">
          Main Page
        </Button>
      </CustomLink>
    </>
  );
};

export default NotFoundPage;
