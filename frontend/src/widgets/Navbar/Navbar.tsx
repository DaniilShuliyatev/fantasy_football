import { Typography } from "@mui/material";
import { type FC, memo, useState } from "react";
import {
  CustomIcon,
  CustomTab,
  CustomTabs,
  Header,
  LogoutButton,
} from "./Navbar.style";
import { RoutePaths } from "../../shared";
import { Link } from "react-router";

enum NavbarTabsEnum {
  STATISTICS_PAGE = 0,
  TEAM_PAGE = 1,
}

export const Navbar: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<NavbarTabsEnum>(
    NavbarTabsEnum.STATISTICS_PAGE,
  );

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: NavbarTabsEnum,
  ) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Header>
        <Typography component={"h1"}>Fantasy league</Typography>
        <LogoutButton variant="contained">
          LOGOUT
          <CustomIcon />
        </LogoutButton>
      </Header>
      <CustomTabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
      >
        <CustomTab
          label={"STATISTICS"}
          component={Link}
          to={RoutePaths.statistics}
        />
        <CustomTab
          label={"FANTASY TEAM"}
          component={Link}
          to={RoutePaths.fantasy_teams}
        />
      </CustomTabs>
    </>
  );
});
