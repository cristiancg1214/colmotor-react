import React from "react";
import { Link } from "react-router-dom";
class VendedorVerFacturas extends React.Component {
  data = [];
  descripcion = 1;
  async componentDidMount() {
    await this.handleBuscar();
  }
  handleBuscar = async (e) => {
    if (!e) {
    } else {
      this.descripcion = e.target.value;
    }
    let res = await fetch(`http://localhost:3003/factura/${this.descripcion}`);
    this.data = await res.json();
    this.setState(this.data);
    console.log(this.data);
  };
  handleInicio = () => {
    window.location.href = "/vendedorMenuPrincipal";
  };

  handleVerDetalle = (num_fact) => {
    window.location.href = `/vendedorVerDetalleFactura/${num_fact}`;
  };
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
                <th>Número de factura</th>
                <th>Cedula </th>
                <th>Fecha</th>
                <th>Subtotal</th>
                <th>Iva</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.data.map((factura) => {
                let fecha = factura.fecha.substr(0, 10);

                return (
                  <tr key={factura.num_fact}>
                    <td>{factura.num_fact}</td>
                    <td>{factura.cedula}</td>
                    <td>{fecha}</td>
                    <td>{factura.subtotal}</td>
                    <td>{factura.iva}</td>
                    <td>{factura.total}</td>
                    <td>
                      <Link
                        to={`/vendedorVerDetalleFactura/${factura.num_fact}`}
                      >
                        Ver detalle
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

export default VendedorVerFacturas;
