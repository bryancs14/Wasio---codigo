import React from "react";
import { Route, Switch } from "react-router";
import CarritoState from "../../context/carrito/carritoState";
import ClientHeader from "./components/ClientHeader";
import CarritoPage from "./pages/carrito/CarritoPage";

import ClientHomePage from "./pages/home/ClientHomePage";
import ProductoDetailPage from "./pages/productos/ProductoDetailPage";
import ProductosPage from "./pages/productos/ProductosPage";
import TiendaDetailPage from "./pages/tiendas/TiendaDetailPage";
import TiendasPage from "./pages/tiendas/TiendasPage";

const ClientRouter = () => {
  return (
    <>
      <CarritoState>
        <ClientHeader />
        <Switch>
          <Route path="/tienda">
            <TiendasPage />
          </Route>
          <Route path="/productos/:id">
            <ProductoDetailPage />
          </Route>
          <Route path="/productos">
            <ProductosPage />
          </Route>
          <Route path="/carrito">
            <CarritoPage />
          </Route>
          <Route path="/" exact>
            <ClientHomePage />
          </Route>
        </Switch>
      </CarritoState>
    </>
  );
};

export default ClientRouter;
