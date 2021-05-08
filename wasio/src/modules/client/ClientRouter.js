import React from "react";
import { Route, Switch } from "react-router";
import CarritoState from "../../context/carrito/carritoState";
import ClientHeader from "./components/ClientHeader";
import CarritoPage from "./pages/carrito/CarritoPage";

import ClientHomePage from "./pages/home/ClientHomePage";
import PagarPage from "./pages/pago/PagarPage";
import ProductoDetailPage from "./pages/productos/ProductoDetailPage";
import ProductosPage from "./pages/productos/ProductosPage";
import TiendaDetailPage from "./pages/tiendas/TiendaDetailPage";
import TiendasPage from "./pages/tiendas/TiendasPage";
import ClientFooter from './../components/ClientFooter'
import ClientHomePage from './pages/home/ClientHomePage'
import ProductosPage from './pages/productos/ProductosPage'

const ClientRouter = () => {
  return (

      <CarritoState>
        <ClientHeader />
        <Switch>
          <Route path="/pago">
            <PagarPage />
          </Route>
          <Route path="/tienda/:id">
            <TiendaDetailPage />
          </Route>
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
      <ClientFooter />
      </CarritoState>

      

  );
};

export default ClientRouter;
