import { Navigate, useLocation } from "react-router";
import { RoutePaths } from "../../../shared";
import type { FC, PropsWithChildren } from "react";

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const auth = /* useSelector(getUserAuthData) */ true;
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths.statistics_teams}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
