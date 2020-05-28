import React from "react";
import "./Login.styles.css";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    tipoUsuario: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch(
      `http://localhost:3003/usersT/${this.state.form.cedula}`
    );
    this.data = await res.json();
    console.log(this.data);
    if (this.data.length == 0) {
      alert("El usuario no se encuentra registrado");
    } else {
      if (this.data) {
        this.data.map((usuario) => {
          if (usuario) {
            if (usuario.contrasena == this.state.form.contrasenia) {
              if (usuario.tipo_usuario == "Dueño") {
                let newState = {
                  tipoUsuario: usuario.tipo_usuario,
                };
                this.setState(newState);
                alert(`Bienvenido/a ${usuario.nombre}`);
                // window.location.href = "/adminMenuPrincipal";
              } else {
                if (usuario.tipo_usuario == "Vendedor/a") {
                  let newState = {
                    tipoUsuario: usuario.tipo_usuario,
                  };
                  this.setState(newState);
                  alert(`Bienvenido/a ${usuario.nombre}`);
                  // window.location.href = "/vendedorMenuPrincipal";
                }
              }
            } else {
              alert("Contraseña incorrecta");
            }
          }
        });
      } else {
        alert("El usuario no se encuentra registrado");
      }
    }

    // console.log(this.data);
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
        <form onSubmit={this.handleSubmit}>
          <h1>Bienvenido a Colmotor</h1>
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
                vale={this.state.cedula}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={this.handleChange}
                name="contrasenia"
                value={this.state.contrasenia}
              ></input>
            </div>
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </center>
        </form>

        {this.state.tipoUsuario == "" ? (
          <Redirect to={"/"} />
        ) : this.state.tipoUsuario == "Dueño" ? (
          <Redirect to={"/adminMenuPrincipal"} />
        ) : (
          <Redirect to={"/vendedorMenuPrincipal"} />
        )}
      </div>
    );
  }
}
export default Login;
