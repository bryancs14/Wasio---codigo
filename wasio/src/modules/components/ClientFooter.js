import React from "react";

const ClientFooter = () => {
  return (
    <footer>
      <div className="EL__footer">
        <div className="footer__container rightfooter">
          <div className="a1p">
            <ul>
              <strong>Datos de Contacto</strong>
              <li>
                <a href="#">+51 945 072 482</a>
              </li>
              <li>
                <a href="#">wasioperu@gmail.com</a>
              </li>
            </ul>
            <ul>
              <strong>Acerca de Nosotros</strong>
              <li>
                <a href="">¿Quiénes somos?</a>
              </li>
              <li>
                <a href="">Nuestros productos</a>
              </li>
            </ul>
          </div>
          <div className="a2p">
            <ul>
              <strong>Atención al cliente</strong>
              <li>
                <a href="">Protección de datos</a>
              </li>
              <li>
                <a href="">Términos y Condiciones</a>
              </li>
              <li>
                <a href="">Cambios y Devoluciones</a>
              </li>
              <li>
                <a href="">Política de Envíos</a>
              </li>
            </ul>
            <ul>
              <ul>
                <strong>Siguenos</strong>
                <li>
                  <a href="">Wasio</a>
                </li>
              </ul>
              <ul>
                <strong>Métodos de Pago</strong>
                <figure>
                  <img
                    src="https://aws-samishop-recursos.s3.amazonaws.com/00000D3E/es-PE/images/icons/WEB_WASIO_HOME_MATERIAL_METODOSDEPAGO.png"
                    alt=""
                  />
                </figure>
              </ul>
            </ul>
          </div>
        </div>
        <div className="footer__container leftfooter">
          <div className="footer__container left">
            <ul>
              <strong>Dirección</strong>
              <li>
                <a href="">
                  Bello Horizonte <br /> F8, Cayma, <br /> Arequipa, Perú
                </a>
              </li>
            </ul>
            <ul>
              <strong>Ayuda</strong>
              <li>
                <a href="">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="">Mi cuenta</a>
              </li>
            </ul>
          </div>
          <figure className="footer__logo">
            <img
              src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/logo/Logotipo1.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
