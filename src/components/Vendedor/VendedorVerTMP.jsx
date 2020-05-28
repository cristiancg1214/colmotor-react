import React from "react";
import { Link } from "react-router-dom";

class VendedorVerTMP extends React.Component {
  sumatotal = "";
  data = [];
  valores = [];
  estado = this.props.estado;
  if(estado = "true") {
    console.log("hola");
  }

  async componentDidUpdate() {
    await this.handlerValoresTotal();
    //
    await this.handleBuscar();

    //
  }
  handleBuscar = async (e) => {
    let res = await fetch(`http://localhost:3003/facturationTMP`);
    this.data = await res.json();
    this.setState(this.data);
  };

  handleInsertarDetalle = async (producto, numFactura) => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      };

      let guardar = await fetch(
        `http://localhost:3003/facturationDetalle/${numFactura}`,
        config
      );
    } catch (error) {}
  };

  handlerValoresTotal = async () => {
    const responseValores = await fetch(`http://localhost:3003/valoresTotales`);
    const resjson = await responseValores.json();
    this.valores = resjson[0];
  };
  handlerGuardar = async () => {
    const response = await fetch(`http://localhost:3003/facturationNumeroF`);
    const responseJSON = await response.json();

    this.data.map((producto) => {
      console.log(producto);
      this.handleInsertarDetalle(producto, responseJSON.numeroFactura);
    });

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      let agregarFacturacion = await fetch(
        `http://localhost:3003/descargarFacturacion/${responseJSON.numeroFactura}`,
        config
      );
      alert("Factura guardada correctamente");
      //window.location.href = "/vendedorMenuPrincipal";
    } catch (error) {}
  };

  render() {
    return (
      <div className="container">
        <table id="tableUserList" className="paleBlueRows">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Valor neto</th>
              <th>Iva</th>
              <th>Total </th>
            </tr>
            {this.data.map((producto) => {
              return (
                <tr>
                  <td>{producto.descripcion}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.valor_neto}</td>
                  <td>{producto.iva}</td>
                  <td>{producto.total}</td>
                </tr>
              );
            })}
            <tr></tr>
          </thead>

          <tbody></tbody>
        </table>
        <a>Subtotal: {this.valores.neto}</a>
        <br />
        <a>Iva: {this.valores.iva}</a>
        <br />
        <a>Total: {this.valores.total}</a>
        <br />
        <Link
          className="btn btn-primary"
          to="/vendedorMenuPrincipal"
          onClick={this.handlerGuardar}
        >
          Guardar
        </Link>
      </div>
    );
  }
}
export default VendedorVerTMP;
