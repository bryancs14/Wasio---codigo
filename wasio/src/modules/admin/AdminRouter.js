import React from "react";
import { Route, Switch } from "react-router";
import AdminHeader from "./components/AdminHeader";
import "./../../styles/Admin.css"
import AdminCrearProducto from "./pages/producto/AdminCrearProducto";
import AdminProductoPage from "./pages/producto/AdminProductoPage";
import AdminCrearMarca from "./pages/marca/AdminCrearMarca";
import AdminMarcaPage from "./pages/marca/AdminMarcaPage";
import AdminCrearCategoria from "./pages/categoria/AdminCrearCategoria";
import AdminCategoriaPage from "./pages/categoria/AdminCategoriaPage";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/categoria/editar/:id_categoria">
          <AdminCrearCategoria />
        </Route>
        <Route path="/admin/categoria/crear">
          <AdminCrearCategoria />
        </Route>
        <Route path="/admin/categoria">
          <AdminCategoriaPage />
        </Route>
        <Route path="/admin/marca/editar/:id_marca">
          <AdminCrearMarca />
        </Route>
        <Route path="/admin/marca/crear">
          <AdminCrearMarca />
        </Route>
        <Route path="/admin/marca">
          <AdminMarcaPage />
        </Route>
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
