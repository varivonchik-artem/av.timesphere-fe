import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfiguration } from "../routes/routeConfiguration/routeConfiguration";

export function AppRouter(): React.ReactElement {
  return (
    <React.Suspense fallback="ALoading">
      <Routes>
        {Object.values(routeConfiguration).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
