import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum AppRouteName {
  MAIN = "main",
  NOT_FOUND = "not_found",
}

export const AppRoutePath: Record<AppRouteName, string> = {
  [AppRouteName.MAIN]: "/",
  [AppRouteName.NOT_FOUND]: "*",
};

export const routeConfiguration: Record<AppRouteName, RouteProps> = {
  [AppRouteName.MAIN]: {
    path: AppRoutePath.main,
    element: <MainPage />,
  },
  [AppRouteName.NOT_FOUND]: {
    path: AppRoutePath.not_found,
    element: <NotFoundPage />,
  },
};
