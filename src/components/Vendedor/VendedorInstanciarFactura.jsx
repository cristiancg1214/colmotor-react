import React from "react";

import { Link } from "react-router-dom";
//import "./AdminVerUsuarios.styles.css";
import { useEffect } from "react";

class VendedorInstanciarFactura extends React.Component {
  data = [];
  data1 = [];
  nombre = "";
  variableState = 0;
  async componentDidMount() {
    await this.handleBuscar();
    //
  }
  handleBuscar = async (e) => {
    //this.setState({ [e.target.name]: e.target.value });
    if (!e) {
    } else {
      this.nombre = e.target.value;
    }

    let res = await fetch(`http://localhost:3003/users/${this.nombre}`);
    this.data = await res.json();
    this.setState(this.data);
  };

  handleFactura = async (cedula) => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const response = await fetch(
        `http://localhost:3003/facturation/${cedula}`,
        config
      );

      //window.location.href = "/vendedorAggFact";
    } catch (error) {}
  };

  //this.props.history.push(`/adminEditarUsuarios${state}`);
  /*
   */

  render() {
    return (
      <div className="DivPrincipal">
        <div className="divInicio">
          <span width="10">
            <Link to={`/vendedorMenuPrincipal`} className="icon-home3">
              {" "}
            </Link>
          </span>
        </div>
        <div className="DivInputBuscar">
          <input
            type="text"
            onChange={this.handleBuscar}
            className="InputBuscar"
          />
        </div>
        <div className="DivTabla">
          <table id="tableUserList" className="paleBlueRows">
            <thead>
              <tr>
                <th>Cédula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.data.map((usuario) => {
                return (
                  <tr key={usuario.cedula}>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      <Link
                        to="/vendedorAggFact"
                        onClick={() => this.handleFactura(usuario.cedula)}
                      >
                        Seleccionar
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VendedorInstanciarFactura;
