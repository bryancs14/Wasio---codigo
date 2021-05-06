import React from 'react'
import { Route, Switch } from 'react-router'
import ClientFooter from './../components/ClientFooter'
import ClientHeader from './../components/ClientHeader'
import ClientHomePage from './pages/home/ClientHomePage'
import ProductosPage from './pages/productos/ProductosPage'

const ClientRouter = () => {
  return (
    <>
      <ClientHeader />
      <Switch>
        <Route path="/productos">
          <ProductosPage />
        </Route>
        <Route path="/" exact>
          <ClientHomePage />
        </Route>
      </Switch>
      <ClientFooter />
    </>
  )
}

export default ClientRouter
