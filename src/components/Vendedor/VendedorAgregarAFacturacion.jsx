import React from "react";
import VendedorVerTMP from "./VendedorVerTMP";
import { Link } from "react-router-dom";
class VendedorAgregarAFacturacion extends React.Component {
  state = {};

  data = [];

  datos = [];
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
    window.location.href = "/vendedorMenuPrincipal";
  };

  handleAgregarTMP = async (precio, codigo_producto, existencia) => {
    this.datos = {
      codigo_producto: codigo_producto,
      cantidad: this.state.form.cantidad,
      precio: precio,
    };
    console.log(this.datos);
    const cantidad = this.state.form.cantidad;
    if (cantidad > existencia) {
      alert("No se puede agregar esa cantidad a facturación");
    } else {
      try {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.datos),
        };
        console.log(config);
        let res = await fetch("http://localhost:3003/facturationTMP", config);
        let json = await res.json;
      } catch (error) {}
      console.log(precio + " " + codigo_producto + " " + cantidad);
    }
  };

  handleVerTMP = (e) => {
    e.preventDefault();
    document.getElementById("divPTMP").style.display = "block";

    document.getElementById("tmp").style.display = "block";
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handlerCerrarTMP = (e) => {
    e.preventDefault();
    document.getElementById("tmp").style.display = "none";
    document.getElementById("divPTMP").style.display = "none";
  };
  render() {
    return (
      <div>
        <div className="DivPrincipal">
          <center></center>
          <div className="divInicio">
            <span
              width="10"
              className="icon-paste"
              onClick={this.handleVerTMP}
            />
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
                  <th>Acciones</th>

                  <th>
                    <input
                      type="number"
                      name="cantidad"
                      style={{ width: 50 }}
                      onChange={this.handleChange}
                    ></input>
                  </th>
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
                          onClick={() =>
                            this.handleAgregarTMP(
                              producto.precio,
                              producto.codigo_producto,
                              producto.existencia
                            )
                          }
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
        <div id="divPTMP" className="DivTMP">
          <div id="tmp" className="modal">
            <div className="imgcontainer">
              <span
                onClick={this.handlerCerrarTMP}
                className="close"
                title="Close Modal"
              >
                &times;{" "}
              </span>
              <VendedorVerTMP estado="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VendedorAgregarAFacturacion;
