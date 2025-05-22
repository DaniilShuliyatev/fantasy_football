import type { RouteProps } from "react-router";
import {
  CreateTeamPage,
  EditTeamPage,
  FantastTeamPage,
  LoginPage,
  NotFoundPage,
  SignupPage,
  StatisticsPage,
} from "../../pages";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  DEFAULT = "default",
  STATISTICS = "statistics",
  FANTASY_TEAMS = "fantasy_teams",
  STATISTICS_TEAMS = "statistics_teams",
  STATISTICS_PLAYERS = "statistics_players",
  CREATE_TEAM = "create_team",
  EDIT_TEAM = "edit_team",
  LOGIN = "login",
  SIGNUP = "signup",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: "/",
  [AppRoutes.STATISTICS]: "/statistics",
  [AppRoutes.STATISTICS_TEAMS]: "/statistics/teams",
  [AppRoutes.STATISTICS_PLAYERS]: "/statistics/players",
  [AppRoutes.FANTASY_TEAMS]: "/fantasy-team",
  [AppRoutes.CREATE_TEAM]: "/fantasy-team/create",
  [AppRoutes.EDIT_TEAM]: "/fantasy-team/edit-team/", // +id
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.DEFAULT]: {
    path: `${RoutePaths.default}`,
  },
  [AppRoutes.STATISTICS]: {
    path: `${RoutePaths.statistics}`,
    element: <StatisticsPage />,
  },
  [AppRoutes.STATISTICS_TEAMS]: {
    path: `${RoutePaths.statistics_teams}`,
    element: <StatisticsPage />,
  },
  [AppRoutes.STATISTICS_PLAYERS]: {
    path: `${RoutePaths.statistics_players}`,
    element: <StatisticsPage />,
  },
  [AppRoutes.FANTASY_TEAMS]: {
    path: `${RoutePaths.fantasy_teams}`,
    element: <FantastTeamPage />,
    authOnly: true,
  },
  [AppRoutes.EDIT_TEAM]: {
    path: `${RoutePaths.edit_team}:id`,
    element: <EditTeamPage />,
    authOnly: true,
  },
  [AppRoutes.CREATE_TEAM]: {
    path: `${RoutePaths.create_team}`,
    element: <CreateTeamPage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: `${RoutePaths.login}`,
    element: <LoginPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: `${RoutePaths.signup}`,
    element: <SignupPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: `${RoutePaths.not_found}`,
    element: <NotFoundPage />,
  },
};

export const navbarShowTabsRoutes = [
  RoutePaths.create_team,
  RoutePaths.edit_team,
  RoutePaths.fantasy_teams,
  RoutePaths.statistics,
  RoutePaths.statistics_players,
  RoutePaths.statistics_teams,
];

export const navbarStatisticsActiveTabRoutes = [
  RoutePaths.statistics,
  RoutePaths.statistics_players,
  RoutePaths.statistics_teams,
];

export const statisticsTeamsRedirectRoutes = [
  RoutePaths.default,
  RoutePaths.statistics,
];
