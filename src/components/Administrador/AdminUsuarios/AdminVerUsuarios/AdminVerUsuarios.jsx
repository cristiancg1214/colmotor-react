import React from "react";
import EditarUsuario from "../AdminEditarUsuario";
import { Link } from "react-router-dom";
import "./AdminVerUsuarios.styles.css";
import { useEffect } from "react";
import AdminEditarUsuarios from "../AdminEditarUsuario";
class AdminVerUsuarios extends React.Component {
  data = [];
  data1 = [];
  nombre = "";
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
    console.log(this.data);
  };

  handleEditar = (cedula, nombre, correo, contrasena) => {
    window.location.href = `/adminEditarUsuarios/${cedula}`;
    //alert(cedula);
  };

  //this.props.history.push(`/adminEditarUsuarios${state}`);
  /*
   */

  handleEliminar = (e) => {
    console.log(e);
  };
  handleInicio = () => {
    window.location.href = "/adminMenuUsuarios";
  };

  render() {
    return (
      <div className="DivPrincipal">
        <div className="divInicio">
          <span width="10">
            <Link to={`/adminMenuPrincipal`} className="icon-home3">
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
                        to={`/adminEditarUsuarios/${usuario.cedula}`}
                        className="editUser btn btn-success"
                      >
                        Editar
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

export default AdminVerUsuarios;
