import { Navbar } from "../widgets";
import { AppRouter } from "./providers";
import { AppRouterWrapper } from "./App.styles";
import type { FC } from "react";

export const App: FC = () => (
  <>
    <Navbar />
    <AppRouterWrapper>
      <AppRouter />
    </AppRouterWrapper>
  </>
);
