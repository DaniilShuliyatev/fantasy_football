import { Typography } from "@mui/material";
import { type FC, memo, useState } from "react";
import { Link } from "react-router";
import { RoutePaths } from "../../shared";
import {
  CustomIcon,
  Header,
  LogoutButton,
  NavItem,
  Navigation,
} from "./Navbar.style";

export const Navbar: FC = memo(() => {
  const [statisticPage, setStatisticPage] = useState(true);
  const [teamPage, setTeamPage] = useState(false);

  const showTeamPage = () => {
    setStatisticPage(false);
    setTeamPage(true);
  };

  const showStatPage = () => {
    setTeamPage(false);
    setStatisticPage(true);
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
      <Navigation>
        <NavItem onClick={showStatPage} active={statisticPage}>
          <Link
            to={RoutePaths.statistics}
            style={{
              all: "unset",
            }}
          >
            STATISTICS
          </Link>
        </NavItem>
        <NavItem onClick={showTeamPage} active={teamPage}>
          <Link
            to={RoutePaths.fantasy_teams}
            style={{
              all: "unset",
            }}
          >
            FANTASY TEAMS
          </Link>
        </NavItem>
      </Navigation>
    </>
  );
});
