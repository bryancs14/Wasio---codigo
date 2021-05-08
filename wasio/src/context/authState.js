import React, { useEffect, useReducer } from "react";
import { postVerificar } from "../services/authService";
import AuthContext from "./authContext";
import { authReducer } from "./authReducer";

const AuthState = (props) => {

  const initialState = {
    autenticado: false,
    cargando: true,
    token: null,
    usu_nom: null,
    usu_id: null,
    usu_tipo: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesion = (token) => {
    localStorage.setItem("token", token);
    let payloadStringDecript = atob(token.split(".")[1]);
    let payloadJson = JSON.parse(payloadStringDecript);

    dispatch(
      {
        action: "INICIAR_SESION",
        data: {
          autenticado: true,
          cargando: false,
          token: token,
          usu_nom: payloadJson.usu_nom,
          usu_id: payloadJson.usu_id,
          usu_tipo: payloadJson.usu_tipo
        }
      }
    )
  }

  const iniciarSesionLocalStorage = () => {
    let token = localStorage.getItem("token");
    if(token) {
      postVerificar(token).then(rpta => {
        if(rpta.request.status === 200) {
          iniciarSesion(token);
        }
      }).catch(error => {
        cerrarSesion();
      })
    } else {
      cerrarSesion();
    }
  }

  const cerrarSesion = () => {
    dispatch({
      action: "CERRAR_SESION"
    })
  }

  useEffect(() => {
    iniciarSesionLocalStorage();
  }, [])

  return (
    <AuthContext.Provider value={{
      iniciarSesion,
      cerrarSesion,
      ...state
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
