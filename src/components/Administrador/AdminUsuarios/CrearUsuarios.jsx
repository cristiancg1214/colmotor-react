import React from "react";
import "../../Login/Login.styles.css";
import { Link, Redirect } from "react-router-dom";

class CrearUsuarios extends React.Component {
  state = {
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
      let res = await fetch("http://localhost:3003/users", config);
      let json = await res.json;
      let newState = {
        estado: 1,
      };
      this.setState(newState);
      alert("Usuario creado correctamente");
    } catch (error) {}
  };

  //

  handleChange = (e) => {
    //this.setState({ [e.target.name]: e.target.value });

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
        <form>
          <center>
            <h1>Registrar Usuario</h1>
          </center>

          <hr />
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Cédula:</label>
            <div className="col-sm-10">
              <input
                size="40"
                type="text"
                className="form-control"
                placeholder="Cédula"
                onChange={this.handleChange}
                name="cedula"
                value={this.state.cedula}
                required
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nombre:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                onChange={this.handleChange}
                name="nombre"
                value={this.state.nombre}
                required
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Correo:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                onChange={this.handleChange}
                name="correo"
                value={this.state.correo}
                required
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contra:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
                onChange={this.handleChange}
                name="contrasena"
                value={this.state.contraseña}
                required
              ></input>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tipo Usuario:</label>
            <div className="col-sm-10">
              <select name="tipo_usuario" onChange={this.handleChange}>
                <option value="Cliente">Cliente</option>
                <option value="Dueño"> Dueño</option>
                <option value="Vendedor/a"> Vendedor/a</option>
              </select>
            </div>
          </div>
          <hr />
          <center>
            <Link className="btn btn-primary" onClick={this.handleSubmit}>
              {" "}
              Registrar
            </Link>
          </center>
        </form>
        {this.state.estado == 1 ? (
          <Redirect to="/adminMenuUsuarios" />
        ) : (
          console.log("Nada")
        )}
      </div>
    );
  }
}
export default CrearUsuarios;
