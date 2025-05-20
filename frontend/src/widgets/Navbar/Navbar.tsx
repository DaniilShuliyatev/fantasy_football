import { Typography } from "@mui/material";
import { type FC, memo, useEffect, useState } from "react";
import {
  CustomLink,
  CustomLoginIcon,
  CustomLogoutIcon,
  CustomTab,
  CustomTabs,
  Header,
  LoginButton,
  LogoutButton,
} from "./Navbar.style";
import {
  navbarShowTabsRoutes,
  navbarStatisticsActiveTabRoutes,
  RoutePaths,
} from "../../shared";
import { Link, useLocation } from "react-router";

enum NavbarTabsEnum {
  STATISTICS_PAGE,
  TEAM_PAGE,
}

type NavbarProps = {
  isAuth: boolean;
};

const getCurrentTab = (pathname: string) => {
  return navbarStatisticsActiveTabRoutes.includes(pathname)
    ? NavbarTabsEnum.STATISTICS_PAGE
    : NavbarTabsEnum.TEAM_PAGE;
};

export const Navbar: FC<NavbarProps> = memo(({ isAuth }) => {
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<NavbarTabsEnum>(
    getCurrentTab(pathname),
  );

  useEffect(() => {
    setActiveTab(getCurrentTab(pathname));
  }, [pathname]);

  const handleTabChange = (_: unknown, newValue: NavbarTabsEnum) => {
    setActiveTab(newValue);
  };

  const isTabsVisible = navbarShowTabsRoutes.includes(pathname);

  return (
    <>
      <Header>
        <CustomLink to={RoutePaths.statistics_teams}>
          <Typography component={"h1"}>Fantasy league</Typography>
        </CustomLink>
        {isTabsVisible &&
          (isAuth ? (
            <LogoutButton variant="contained">
              LOGOUT
              <CustomLogoutIcon />
            </LogoutButton>
          ) : (
            <LoginButton
              component={Link}
              to={RoutePaths.login}
              variant="contained"
            >
              LOGIN
              <CustomLoginIcon />
            </LoginButton>
          ))}
      </Header>
      {isTabsVisible ? (
        <CustomTabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
        >
          <CustomTab
            label={"STATISTICS"}
            component={Link}
            to={RoutePaths.statistics_teams}
          />
          {/* Private tabs */}
          {isAuth && (
            <CustomTab
              label={"FANTASY TEAM"}
              component={Link}
              to={RoutePaths.fantasy_teams}
            />
          )}
        </CustomTabs>
      ) : (
        <CustomTabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
        />
      )}
    </>
  );
});
