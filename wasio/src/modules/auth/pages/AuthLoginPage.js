import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import AuthContext from "../../../context/authContext";
import { postLogin } from "../../../services/authService";

const formularioVacio = {
  correo: "",
  password: ""
}

const AuthLoginPage = () => {

  const {iniciarSesion, usu_tipo} = useContext(AuthContext);
  const history = useHistory();

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const hangleSubmit = (e) => {
    e.preventDefault();
    postLogin(formulario).then(rpta => {
      if(rpta.request.status === 200) {
        let { token } = rpta.data;
        iniciarSesion(token);
        let payloadJSON = JSON.parse(atob(token.split(".")[1]));
        if (payloadJSON.usu_tipo === "admin") {
          history.replace("/admin");
        } else {
          history.replace("/")
        }
      }
    })
  }

  const [formulario, setFormulario] = useState(formularioVacio);

  return (
    <div className="section__wrapper">
      <form className="div__inicia" onSubmit={hangleSubmit}>
        <h2>INICIA SESIÓN CON</h2>
        <label htmlFor="">Correo Electrónico</label>
        <input type="text" name="correo" value={formulario.correo} onChange={hangleChange}/>
        <label htmlFor="">Contraseña</label>
        <input type="password" name="password" value={formulario.password} onChange={hangleChange}/>
        <button type="submit">ENTRAR</button>
        <a href="">
          <p className="link__inicia">Olvidaste tu contraseña? </p>
        </a>
      </form>
      <div className="div__registrate">
        <h2>¿LA PRIMERA VEZ AQUÍ?</h2>
        <li> Rastreo de pedidos</li>
        <li> Formas de pago</li>
        <li> Excelente Asistencia al Cliente</li>
        <p>¡Regístrate ahora! Es fácil y gratis.</p>
        <button>REGÍSTRATE AHORA</button>
      </div>
    </div>
  );
};

export default AuthLoginPage;
