import { Typography } from "@mui/material";
import { type FC, memo, useCallback, useEffect, useState } from "react";
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
  navbarNoTabsRoutes,
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

export const Navbar: FC<NavbarProps> = memo(({ isAuth }) => {
  const { pathname } = useLocation();

  const setActiveTabFromPathname = useCallback(() => {
    return !navbarStatisticsActiveTabRoutes.includes(pathname)
      ? NavbarTabsEnum.TEAM_PAGE
      : NavbarTabsEnum.STATISTICS_PAGE;
  }, [pathname]);

  const [activeTab, setActiveTab] = useState<NavbarTabsEnum>(
    setActiveTabFromPathname,
  );

  useEffect(() => {
    setActiveTab(setActiveTabFromPathname());
  }, [setActiveTabFromPathname]);

  const handleTabChange = (_: unknown, newValue: NavbarTabsEnum) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Header>
        <CustomLink to={RoutePaths.statistics_teams}>
          <Typography component={"h1"}>Fantasy league</Typography>
        </CustomLink>
        {!navbarNoTabsRoutes.includes(pathname) &&
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
      {!navbarNoTabsRoutes.includes(pathname) ? (
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
