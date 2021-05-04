import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestHeader from "../guest/components/GuestHeader";
import ProductosPage from "./pages/productos/ProductosPage";

export const ClienteRouter = () => {
  return (
    <>
      <GuestHeader />
      <Switch>
          <Route path="/productos">
              <ProductosPage />
          </Route>
      </Switch>
    </>
  );
};
