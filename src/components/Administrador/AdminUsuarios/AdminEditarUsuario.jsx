import React from "react";
import { useState, useEffect } from "react";
import AdminEditarUsuarioForm from "./AdminEditarUsuarioForm";
import "../../Login/Login.styles.css";

class EditarUsuarios extends React.Component {
  data = [];
  state = {
    form: this.props.match.params,
    form2: {},
  };

  handleBuscar = async (e) => {
    //this.setState({ [e.target.name]: e.target.value });

    let res = await fetch(
      `http://localhost:3003/usersT/${this.state.form.cedula}`
    );

    this.data = await res.json();
    this.setState(this.data);
    // console.log(this.data);
  };
  //
  componentDidMount() {
    this.handleBuscar();
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    console.log(this.data);
    const clases = {
      display: "none",
    };
    return <AdminEditarUsuarioForm datos={this.state.form2[0]} />;
  }
}

export default EditarUsuarios;
