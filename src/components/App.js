import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";
import AdminUsuarios from "../pages/AdminUsuarios";
import AdminVerUsuarios from "../pages/AdminVerUsuarios";
import CrearUsuarios from "../pages/CrearUsuarios";
import AdminEditarUsuarios from "../components/Administrador/AdminUsuarios/AdminEditarUsuarioForm";
import AdminMenuProductos from "../pages/AdminMenuProductos";
import AdminVerProductos from "../pages/AdminVerProductos";
import AdminCrearProductos from "../pages/AdminCrearProductos";

import Vendedor from "../pages/Vendedor";

import VendedorVerProductos from "../pages/VendedorVerProductos";
import VendedorCrearFact from "../pages/VendedorCrearFact";
//import VendedorAgregarAFacturacion from "./Vendedor/VendedorAgregarAFacturacion";
import VendedorAgregarAFact from "../pages/VendedorAgregarAFact";
//import AdminEditarUsuarioFrom from "../components/Administrador/AdminUsuarios/AdminEditarUsuarioForm";
import AdminEditarProductosForm from "./Administrador/AdminProductos/AdminEditarProductosForm";
import VendedorVerTMP from "./Vendedor/VendedorVerTMP";
import VendedorVerFacturasV from "../pages/VendedorVerFacturas";
import VendedorVerDetalleF from "../pages/VendedorVerDetalleFactura";
import AdminVerFacturasV from "../pages/AdminVerFacturas";
import AdminVerDetalleF from "../pages/AdminVerDetalleFactura";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/adminMenuPrincipal" component={Administrador} />

      <Route exact path="/adminMenuUsuarios" component={AdminUsuarios} />
      <Route exact path="/adminVerUsuarios" component={AdminVerUsuarios} />
      <Route exact path="/adminCrearUsuarios" component={CrearUsuarios} />
      <Route
        exact
        path="/adminEditarUsuarios/:cedula"
        component={AdminEditarUsuarios}
      />

      <Route exact path="/AdminEditUsu" component={AdminEditarUsuarios} />

      <Route exact path="/adminMenuProductos" component={AdminMenuProductos} />
      <Route exact path="/adminVerProductos" component={AdminVerProductos} />
      <Route exact path="/adminVerFacturas" component={AdminVerFacturasV} />
      <Route
        exact
        path="/adminVerDetalleFactura/:id"
        component={AdminVerDetalleF}
      />
      <Route
        exact
        path="/adminCrearProductos"
        component={AdminCrearProductos}
      />
      <Route
        exact
        path="/adminEditProductos/:id"
        component={AdminEditarProductosForm}
      />

      <Route exact path="/vendedorMenuPrincipal" component={Vendedor} />
      <Route
        exact
        path="/vendedorVerProductos"
        component={VendedorVerProductos}
      />

      <Route
        exact
        path="/vendedorRealizarVenta"
        component={VendedorCrearFact}
      />
      <Route exact path="/vendedorAggFact" component={VendedorAgregarAFact} />

      <Route exact path="/vendedorVerTMP" component={VendedorVerTMP} />

      <Route
        exact
        path="/vendedorVerFacturas"
        component={VendedorVerFacturasV}
      />

      <Route
        exact
        path="/vendedorVerDetalleFactura/:id"
        component={VendedorVerDetalleF}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
