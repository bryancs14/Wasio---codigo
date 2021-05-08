import React, { useState } from "react";
import "./../../../styles/Vista__registro.css";

const AuthRegistroPage = () => {

  const registroVacio = () => {
    
  }

  const [registro, setRegistro] = useState()


  return (
    <main className="main_Vregistro">
      <section className="mainsect_registro">
        <h1 className="title_registro">Registro</h1>
        <form className="form_registro">
          <div className="cuadro_inputsregistro">
            <label for="">Nombre de usuario:</label>
            <input type="text" placeholder="Nombre de usuario" />
            <label for="">Correo electrónico:</label>
            <input type="text" placeholder="Correo electrónico" />
            <label for="">Contraseña:</label>
            <input type="password" placeholder="Contraseña" />
            <label for="">Confirma tu contraseña:</label>
            <input type="password" placeholder="Confirma tu contraseña" />
            <div className="aceptacion_registro">
              <input type="checkbox" />
              <p>
                Sí, acepto brindar mis datos personales y estoy de acuerdo con
                los terminos y condiciones.
              </p>
            </div>
          </div>
          <button className="btn_Vregistro" type="submit">Regístrate Ahora</button>
        </form>

        <li className="link_Vregistro">
          <a href="">Ya tienes una cuenta? Ingresa.</a>
        </li>
      </section>
    </main>
  );
};

export default AuthRegistroPage;
