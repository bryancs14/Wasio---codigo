import React from "react";
import { Switch, Route } from "react-router";
import AdminCrearMarca from "./pages/AdminCrearMarca";
import AdminMarcaPage from "./pages/AdminMarcaPage";

const AdminMarcaRouter = () => {
  return (
    <Switch>
      <Route path="/admin/marca/editar/:id_marca">
        <AdminCrearMarca />
      </Route>
      <Route path="/admin/marca/crear">
        <AdminCrearMarca />
      </Route>
      <Route path="/admin/marca">
        <AdminMarcaPage />
      </Route>
    </Switch>
  );
};

export default AdminMarcaRouter;
