import React from "react";
import { Route, Switch } from "react-router";
import AdminHeader from "./components/AdminHeader";
import AdminNavbar from "./components/AdminNavbar";
import "./../../styles/Admin.css"
import AdminCrearProducto from "./pages/producto/AdminCrearProducto";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      {/* <AdminNavbar /> */}
      <Switch>
        <Route path="/admin/producto/crear">
          <AdminCrearProducto />
        </Route>
        <Route path="/admin">

        </Route>
      </Switch>
    </>
  );
};

export default AdminRouter;
