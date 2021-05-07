import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/authState";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import ClientRouter from "./modules/client/ClientRouter";


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
          <Route path="/">
            <ClientRouter />
          </Route>
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
