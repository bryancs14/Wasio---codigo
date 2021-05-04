import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/authState";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import { ClienteRouter } from "./modules/cliente/ClienteRouter";
import GuestRouter from "./modules/guest/GuestRouter";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminRouter />
          </Route>
          <Route path="/auth">
            <AuthRouter />
          </Route>
          <Route path="/productos">
            <ClienteRouter />
          </Route>
          <Route path="/" exact>
            <GuestRouter />
          </Route>
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
