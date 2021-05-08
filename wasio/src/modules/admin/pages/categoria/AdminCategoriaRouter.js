import React from "react";
import { Switch, Route } from "react-router";
import AdminCrearCategoria from "./pages/AdminCrearCategoria";
import AdminCategoriaPage from "./pages/AdminCategoriaPage";

const AdminCategoriaRouter = () => {
  return (
    <Switch>
      <Route path="/admin/categoria/editar/:id_categoria">
        <AdminCrearCategoria/>
      </Route>
      <Route path="/admin/categoria/crear">
        <AdminCrearCategoria/>
      </Route>
      <Route path="/admin/categoria">
        <AdminCategoriaPage/>
      </Route>
    </Switch>
  );
};

export default AdminCategoriaRouter;
