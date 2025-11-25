import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export enum AppRoutes {
  MAIN_PAGE = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
};

export const routeConfiguration: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
