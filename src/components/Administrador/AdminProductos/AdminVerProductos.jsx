import React from "react";

import { Link } from "react-router-dom";
import "./AdminVerProductos.styles.css";
import { useEffect } from "react";
class AdminVerProductos extends React.Component {
  data = [];
  descripcion = "";
  async componentDidMount() {
    await this.handleBuscar();
    //
  }
  handleBuscar = async (e) => {
    if (!e) {
    } else {
      this.descripcion = e.target.value;
    }
    let res = await fetch(`http://localhost:3003/products/${this.descripcion}`);
    this.data = await res.json();
    this.setState(this.data);
    console.log(this.data);
  };
  handleInicio = () => {
    window.location.href = "/adminMenuProductos";
  };

  handleEditar = (id) => {
    window.location.href = `/adminEditProductos/${id}`;

    /*
     */
  };
  handleEliminar = async (e) => {
    try {
      let config = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      let res = await fetch(`http://localhost:3003/products/${e}`, config);
      this.handleBuscar();
      //console.log(json);
      alert("Producto eliminado correctamente");
      console.log(res);
      // window.location.href = "/adminMenuProductos";
    } catch (error) {}
  };

  render() {
    return (
      <div className="DivPrincipal">
        <center></center>
        <div className="divInicio">
          <span width="10">
            <Link to={`/adminMenuProductos`} className="icon-home3">
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
                <th>Codigo Producto</th>
                <th>Descripción</th>
                <th>Existencia</th>
                <th>Precio</th>

                <th colSpan="5">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.data.map((producto) => {
                return (
                  <tr key={producto.codigo_producto}>
                    <td>{producto.codigo_producto}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.existencia}</td>
                    <td>{producto.precio}</td>
                    <td>
                      <Link
                        to={`/adminEditProductos/${producto.codigo_producto}`}
                        className="editUser btn btn-success"
                      >
                        {" "}
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button
                        className="deleteUser  btn btn-warning"
                        onClick={() =>
                          this.handleEliminar(producto.codigo_producto)
                        }
                      >
                        Eliminar
                      </button>
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

export default AdminVerProductos;
