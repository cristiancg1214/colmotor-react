import React from "react";
import VendedorVerDetalleFactura from "../components/Vendedor/VendedorVerDetalleFactura";

class VendedorVerDetalleF extends React.Component {
  render() {
    return (
      <div>
        <VendedorVerDetalleFactura id={this.props.match.params.id} />;
      </div>
    );
  }
}
export default VendedorVerDetalleF;
