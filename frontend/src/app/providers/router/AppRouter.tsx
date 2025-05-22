import { Skeleton } from "@mui/material";
import { Suspense, useCallback } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import {
  type AppRoutesProps,
  routeConfig,
  RoutePaths,
  statisticsTeamsRedirectRoutes,
} from "../../../shared";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const location = useLocation();

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<Skeleton>{route.element}</Skeleton>}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  if (statisticsTeamsRedirectRoutes.includes(location.pathname)) {
    return (
      <Navigate
        to={RoutePaths.statistics_teams}
        state={{ from: location }}
        replace
      />
    );
  }

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
