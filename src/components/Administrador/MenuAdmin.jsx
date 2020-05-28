import React from "react";
import "../../fonts.css";
import "./EstilosAdmin.css";
import { Link } from "react-router-dom";
var clic = 1;
class MenuAdmin extends React.Component {
  handleMenu = (e) => {
    if (clic == 2) {
      // <MenuAdmin />;
      document.getElementById("1").style.display = "block";
      clic = 1;
    } else {
      document.getElementById("1").style.display = "none";

      clic = clic + 1;
    }
  };
  render() {
    return (
      <div>
        <center>
          <div className="DivPrin">
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
                    <Link to="/" className="icon-home3">
                      {" "}
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to={`/adminMenuUsuarios/`} className="icon-users">
                      {" "}
                      Usuarios
                    </Link>
                  </li>
                  <li>
                    <Link to="/adminVerFacturas" className="icon-paste">
                      {" "}
                      Facturas
                    </Link>
                  </li>
                  <li>
                    <Link className="icon-briefcase" to="/adminMenuProductos">
                      {" "}
                      Productos
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

export default MenuAdmin;
