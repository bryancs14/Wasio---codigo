import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/authState";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import ClientRouter from "./modules/client/ClientRouter";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <AuthState>
        <Switch>
          <PrivateRoute path="/admin">
            <AdminRouter />
          </PrivateRoute>
          <Route path="/auth">
            <AuthRouter />
          </Route>
          <Route path="/">
            <ClientRouter />
          </Route>
        </Switch>
      </AuthState>
    </Router>
  );
};

export default App;
