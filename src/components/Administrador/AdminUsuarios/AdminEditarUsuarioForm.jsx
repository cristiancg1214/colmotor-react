import React from "react";
import "../../Administrador/EstilosAdmin.css";
import { Link, Redirect } from "react-router-dom";

class AdminEditarUsuarioFrom extends React.Component {
  state = {
    cedula: this.props.match.params.cedula,
    nombre: "",
    correo: "",
    contrasena: "",
    tipo_usuario: "",
    estado: 0,
  };
  handleBuscar = async (e) => {
    let res = await fetch(`http://localhost:3003/usersT/${this.state.cedula}`);
    console.log(this.state.cedula);
    const datos = await res.json();
    let newState = {
      cedula: datos[0].cedula,
      nombre: datos[0].nombre,
      correo: datos[0].correo,
      contrasena: datos[0].contrasena,
      tipo_usuario: datos[0].tipo_usuario,
    };
    this.setState(newState);
  };
  componentDidMount() {
    this.handleBuscar();
  }
  handleOnChangeCedula = (e) => {
    let newState = { ...this.state, cedula: e.target.value };
    this.setState(newState);
  };
  handleOnChangeNombre = (e) => {
    let newState = { ...this.state, nombre: e.target.value };
    this.setState(newState);
  };
  handleOnChangeCorreo = (e) => {
    let newState = { ...this.state, correo: e.target.value };
    this.setState(newState);
  };
  handleOnChangeContrasena = (e) => {
    let newState = { ...this.state, contrasena: e.target.value };
    this.setState(newState);
  };
  handleOnChangeTipoUsuario = (e) => {
    let newState = { ...this.state, tipo_usuario: e.target.value };
    this.setState(newState);
  };
  handleActualizar = async (e) => {
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
      let res = await fetch("http://localhost:3003/users", config);
      let json = await res.json;
      let newState = {
        estado: 1,
      };
      this.setState(newState);
      alert("Usuario actualizado correctamente");
    } catch (error) {}
  };
  render() {
    return (
      <div className="fondo">
        <div clases className="login_centrado">
          <br />
          <form>
            <center>
              <h1>Editar Usuario</h1>
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
                  name="cedula"
                  readOnly
                  value={this.state.cedula}
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
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleOnChangeNombre}
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
                  name="correo"
                  value={this.state.correo}
                  onChange={this.handleOnChangeCorreo}
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
                  name="contrasena"
                  value={this.state.contrasena}
                  onChange={this.handleOnChangeContrasena}
                ></input>
              </div>
            </div>
            <hr />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Tipo Usuario:</label>
              <div className="col-sm-10">
                <select
                  name="tipo_usuario"
                  value={this.state.tipo_usuario}
                  onChange={this.handleOnChangeTipoUsuario}
                >
                  <option value="Cliente">Cliente</option>
                  <option value="Dueño"> Dueño</option>
                  <option value="Vendedor/a"> Vendedor/a</option>
                </select>
              </div>
            </div>
            <hr />
            <center>
              <Link onClick={this.handleActualizar} className="btn btn-primary">
                Actualizar
              </Link>
            </center>
          </form>
        </div>
        {this.state.estado == 1 ? (
          <Redirect to="/adminMenuUsuarios" />
        ) : (
          console.log("Nada")
        )}
      </div>
    );
  }
}
export default AdminEditarUsuarioFrom;
