import React from "react";
import "../../fonts.css";
import "../Administrador/EstilosAdmin.css";
import { Link } from "react-router-dom";
var clic = 1;
class MenuVendedor extends React.Component {
  handleMenu = (e) => {
    if (clic == 2) {
      // <MenuAdmin />;
      document.getElementById("1").style.display = "block";
      clic = 1;
      console.log("estoy en el de arriba");
    } else {
      document.getElementById("1").style.display = "none";

      clic = clic + 1;
      console.log("Estoy en el de abajo");
    }
  };
  render() {
    return (
      <div>
        <center>
          <div className="DivVendedor">
            <header>
              <meta
                name="viewport"
                content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0"
              />
              <div className="menu_bar">
                <a href="#" className="bt-menu">
                  <span className="icon-menu" onClick={this.handleMenu}></span>
                  Menú
                </a>
              </div>

              <nav id="1">
                <ul>
                  <li>
                    <Link className="icon-home3" to="/">
                      {" "}
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="icon-users" to="/vendedorRealizarVenta">
                      {" "}
                      Realizar Venta
                    </Link>
                  </li>

                  <li>
                    <Link className="icon-briefcase" to="/vendedorVerProductos">
                      {" "}
                      Buscar Productos
                    </Link>
                  </li>

                  <li>
                    <Link className="icon-paste" to="/vendedorVerFacturas">
                      {" "}
                      Facturas
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </center>
      </div>
    );
  }
}

export default MenuVendedor;
