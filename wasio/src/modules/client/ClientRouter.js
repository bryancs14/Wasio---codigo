import React from "react";
import { Route, Switch } from "react-router";
import ClientHomePage from "./pages/home/ClientHomePage";

const ClientRouter = () => {
  return (
    <Switch>
      <Route path="/">
        <ClientHomePage />
      </Route>
    </Switch>
  );
};

export default ClientRouter;
