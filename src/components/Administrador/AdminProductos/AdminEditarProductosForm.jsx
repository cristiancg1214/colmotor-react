import React from "react";
import { Link, Redirect } from "react-router-dom";

class AdminEditarProductosForm extends React.Component {
  state = {
    codigo_producto: this.props.match.params.id,
    descripcion: "",
    existencia: "",
    precio: "",
    estado: 0,
  };

  handleBuscar = async (e) => {
    let res = await fetch(
      `http://localhost:3003/productsT/${this.state.codigo_producto}`
    );
    console.log(this.state.cedula);
    const datos = await res.json();
    let newState = {
      codigo_producto: datos[0].codigo_producto,
      descripcion: datos[0].descripcion,
      existencia: datos[0].existencia,
      precio: datos[0].precio.substr(1, 10),
    };
    this.setState(newState);
  };

  handleOnChangeDescripcion = (e) => {
    let newState = { ...this.state, descripcion: e.target.value };
    this.setState(newState);
  };
  handleOnChangeExistencia = (e) => {
    let newState = { ...this.state, existencia: e.target.value };
    this.setState(newState);
  };
  handleOnChangePrecio = (e) => {
    let newState = { ...this.state, precio: e.target.value };
    this.setState(newState);
  };
  componentDidMount() {
    this.handleBuscar();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    try {
      let config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(this.state),
      };
      let res = await fetch("http://localhost:3003/products", config);
      let json = await res.json;
      let nuevoState = {
        estado: 1,
      };
      this.setState(nuevoState);
      alert("Producto actualizado correctamente");
    } catch (error) {}
  };

  render() {
    console.log(this.state);
    return (
      <div className="divEditarP">
        <form onSubmit={this.handleSubmit}>
          <center>
            <h1>Editar Producto</h1>
          </center>

          <hr />
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Descripción:</label>
            <div className="col-sm-10">
              <input
                size="40"
                type="text"
                className="form-control"
                placeholder="Descripción"
                onChange={this.handleOnChangeDescripcion}
                name="descripcion"
                required
                value={this.state.descripcion}
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Existencia:</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="Existencia"
                onChange={this.handleOnChangeExistencia}
                name="existencia"
                required
                value={this.state.existencia}
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Precio:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Precio"
                onChange={this.handleOnChangePrecio}
                name="precio"
                required
                value={this.state.precio}
              ></input>
            </div>
          </div>
          <hr />
          <center>
            <Link onClick={this.handleSubmit} className="btn btn-primary">
              Actualizar Producto
            </Link>
          </center>
        </form>
        {this.state.estado == 1 ? (
          <Redirect to="/adminVerProductos" />
        ) : (
          console.log("Nada")
        )}
      </div>
    );
  }
}
export default AdminEditarProductosForm;
