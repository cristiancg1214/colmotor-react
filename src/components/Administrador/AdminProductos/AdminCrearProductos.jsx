import React from "react";
import Alert from "@material-ui/lab/Alert/Alert";
import { Link, Redirect } from "react-router-dom";
class AdminCrearProductos extends React.Component {
  state = {
    form: [],
    respuesta: "",
    estado: 0,
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    console.log(this.state);

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };
      let res = await fetch("http://localhost:3003/products", config);
      let jsonRespuesta = await res.json;
      this.setState({ respuesta: "creado", estado: 1 });

      setInterval(
        () =>
          this.setState({
            respuesta: "",
            descripcion: "",
            existencia: "",
            precio: "",
          }),
        4000
      );
    } catch (error) {}
  };

  handleInicio = () => {
    window.location.href = "/adminMenuProductos";
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="login_centrado">
        <form onSubmit={this.handleSubmit}>
          <center>
            <h1>Registrar Producto</h1>
          </center>
          {this.state.respuesta ? (
            <Alert variant="filled" severity="success">
              Producto creado correctamente
            </Alert>
          ) : (
            <></>
          )}
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
                onChange={this.handleChange}
                name="descripcion"
                value={this.state.descripcion}
                required
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
                onChange={this.handleChange}
                name="existencia"
                value={this.state.existencia}
                required
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Precio:</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="Precio"
                onChange={this.handleChange}
                name="precio"
                value={this.state.precio}
                required
              ></input>
            </div>
          </div>
          <hr />
          <center>
            <Link onClick={this.handleSubmit} className="btn btn-primary">
              Crear Producto
            </Link>
          </center>
        </form>
        {this.state.estado == 1 ? (
          <Redirect to="/adminMenuProductos" />
        ) : (
          console.log("Nada")
        )}
      </div>
    );
  }
}
export default AdminCrearProductos;
