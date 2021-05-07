import React from "react";
import { Route, Switch } from "react-router";
import AdminHeader from "./components/AdminHeader";
import "./../../styles/Admin.css"
import AdminCrearProducto from "./pages/producto/AdminCrearProducto";
import AdminProductoPage from "./pages/producto/AdminProductoPage";
import AdminEditarProducto from "./pages/producto/AdminEditarProducto";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/producto/crear">
          <AdminCrearProducto />
        </Route>
        <Route path="/admin/producto">
          <AdminProductoPage />
        </Route>
        <Route path="/admin/producto/editar">
          {/* <AdminEditarProducto /> */}
        </Route>
      </Switch>
    </>
  );
};

export default AdminRouter;
