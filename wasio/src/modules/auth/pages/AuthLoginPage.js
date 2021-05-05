import React from "react";

const AuthLoginPage = () => {
  return (
    <div class="section__wrapper">
      <div class="div__inicia">
        <h2>INICIA SESIÓN CON</h2>
        <label for="">Correo Electrónico</label>
        <input type="text" />
        <label for="">Contraseña</label>
        <input type="text" />
        <button>ENTRAR</button>
        <a href="">
          {" "}
          <p class="link__inicia">Olvidaste tu contraseña? </p>{" "}
        </a>
      </div>
      <div class="div__registrate">
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
