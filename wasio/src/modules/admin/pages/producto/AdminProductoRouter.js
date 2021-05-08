import React from "react";
import { Switch, Route } from "react-router";
import AdminCrearProducto from "./pages/AdminCrearProducto";
import AdminProductoPage from "./pages/AdminProductoPage";

const AdminProductoRouter = () => {
  return (
    <Switch>
      <Route path="/admin/producto/editar/:id_producto">
        <AdminCrearProducto/>
      </Route>
      <Route path="/admin/producto/crear">
        <AdminCrearProducto />
      </Route>
      <Route path="/admin/producto" exact>
        <AdminProductoPage />
      </Route>
    </Switch>
  );
};

export default AdminProductoRouter;
