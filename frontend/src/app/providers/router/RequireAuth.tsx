import { Navigate, useLocation } from "react-router";
import { AppRoutes, RoutePaths } from "../../../shared";
import type { FC, PropsWithChildren } from "react";

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const auth = /* useSelector(getUserAuthData) */ true;
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths[AppRoutes.STATISTICS]}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
