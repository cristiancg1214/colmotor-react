import React from "react";
import { Link } from "react-router-dom";
class VendedorVerDetalleFactura extends React.Component {
  sumatotal = "";
  data = [];
  valores = [];
  estado = this.props.estado;

  async componentDidMount() {
    //
    await this.handleBuscar();
    console.log(this.props);
    //
  }
  handleBuscar = async (e) => {
    let res = await fetch(
      `http://localhost:3003/verDetalleFactura/${this.props.id}`
    );
    this.data = await res.json();
    this.setState(this.data);
    console.log(this.data);
  };

  render() {
    let subtotal = 0;
    let ivaTotal = 0;
    let totalFactura = 0;
    return (
      <div className="detalleFactura">
        <div className="divInicio">
          <span width="10">
            <Link to={`/vendedorVerFacturas`} className="icon-home3">
              {" "}
            </Link>
          </span>
        </div>
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
              subtotal = producto.subtotal;
              ivaTotal = producto.ivatotal;
              totalFactura = producto.total_factura;
              return (
                <tr key={producto.id_detalle}>
                  <td>{producto.producto}</td>
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
        <br />
        <div style={{ textAlign: "right" }}>
          <a>Subtotal: {subtotal}</a>
          <br />
          <a>Iva: {ivaTotal}</a>
          <br />
          <a>Total: {totalFactura}</a>
          <br />
        </div>
      </div>
    );
  }
}
export default VendedorVerDetalleFactura;
