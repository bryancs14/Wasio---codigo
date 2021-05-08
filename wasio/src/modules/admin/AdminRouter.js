import React from "react";
import { Route, Switch } from "react-router";

import AdminHeader from "./components/AdminHeader";

import AdminDashboardPage from "./pages/dashboard/AdminDashboardPage";
import AdminProductoRouter from "./pages/producto/AdminProductoRouter";
import AdminMarcaRouter from "./pages/marca/AdminMarcaRouter";
import AdminCategoriaRouter from "./pages/categoria/AdminCategoriaRouter";

import "./../../styles/Admin.css";
import "./../../styles/dashboard.css";
import AdminNavbar from "./components/AdminNavbar";
import AdminState from "../../context/adminState";

const AdminRouter = () => {
  return (
    <AdminState>
      <AdminHeader />
      <main className="admin__main">
        <AdminNavbar />
        <Switch>
          <Route path="/admin/categoria">
            <AdminCategoriaRouter/>
          </Route>
          <Route path="/admin/marca">
            <AdminMarcaRouter/>
          </Route>
          <Route path="/admin/producto">
            <AdminProductoRouter/>
          </Route>
          <Route path="/admin">
            <AdminDashboardPage />
          </Route>
        </Switch>
      </main>
    </AdminState>
  );
};

export default AdminRouter;
