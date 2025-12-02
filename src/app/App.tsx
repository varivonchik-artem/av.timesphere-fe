import React from "react";
import { AppRouter } from "./providers/router";
import { Header } from "@/widgets/Header";

export function App(): React.ReactElement {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}
