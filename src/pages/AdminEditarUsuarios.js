import React from "react";
import EditarUsuarios from "../components/Administrador/AdminUsuarios/AdminEditarUsuario";
import { useState, useEffect } from "react";

class AdminEditarUsuarios extends React.Component {}
/*
const AdminEditarUsuarios = (props) => {
  const [usuarioData, setUsuarioData] = useState([]);
  const { match: params } = props;
  // console.log(params.params.cedula);

  const getUsuarioXCedula = async () => {
    const response = await fetch(
      `http://localhost:3003/usersT/${params.params.cedula}`
    );
    const responseJSON = await response.json();
    setUsuarioData(responseJSON);
    //console.log({ responseJSON });
  };

  useEffect(() => {
    getUsuarioXCedula();
  }, [1]);

  return <EditarUsuarios datos={usuarioData} />;
};
*/
export default AdminEditarUsuarios;
