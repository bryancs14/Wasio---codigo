import React from "react";
import { Route, Switch } from "react-router";
import ClientHeader from "../components/ClientHeader";
import ClientFooter from "../components/ClientFooter";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegistroPage from "./pages/AuthRegistroPage";

const AuthRouter = () => {
  return (
    <>
      <ClientHeader />
      <Switch>
        <Route path="/auth/login">
          <AuthLoginPage />
        </Route>
        <Route path="/auth/register">
          <AuthRegistroPage />
        </Route>
      </Switch>
      <ClientFooter />
    </>
  );
};

export default AuthRouter;
