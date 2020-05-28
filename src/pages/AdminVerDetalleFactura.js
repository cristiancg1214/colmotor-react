import React from "react";

import AdminVerDetalleFactura from "../components/Administrador/AdminFacturas/AdminVerDetalleFactura";

class AdminVerDetalleF extends React.Component {
  render() {
    return (
      <div>
        <AdminVerDetalleFactura id={this.props.match.params.id} />
      </div>
    );
  }
}
export default AdminVerDetalleF;
