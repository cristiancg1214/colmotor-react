import React from "react";
import "../EstilosAdmin.css";

import { Link } from "react-router-dom";
var clic = 1;
class AdminUsuarios extends React.Component {
  state = {
    cedula: this.props.match,
  };

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
    console.log();
    return (
      <div>
        <center>
          <div className="DivMenuUsuario">
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
              <div id="1">
                <nav>
                  <ul>
                    <li>
                      <Link to={`/adminMenuPrincipal`} className="icon-home3">
                        {" "}
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link to={`/adminVerUsuarios`} className="icon-users">
                        {" "}
                        Ver Usuarios
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={`/adminCrearUsuarios`}
                        className="icon-briefcase"
                      >
                        {" "}
                        Registrar Usuarios
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
        </center>
      </div>
    );
  }
}

export default AdminUsuarios;
