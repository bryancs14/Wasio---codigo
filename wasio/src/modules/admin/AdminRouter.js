import React from "react";
import { Route, Switch } from "react-router";
import AdminHeader from "./components/AdminHeader";
import "./../../styles/Admin.css"
import AdminCrearProducto from "./pages/producto/AdminCrearProducto";
import AdminProductoPage from "./pages/producto/AdminProductoPage";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/producto/editar/:id_producto">
          <AdminCrearProducto />
        </Route>
        <Route path="/admin/producto/crear">
          <AdminCrearProducto />
        </Route>
        <Route path="/admin/producto" exact>
          <AdminProductoPage />
        </Route>
      </Switch>
    </>
  );
};

export default AdminRouter;
