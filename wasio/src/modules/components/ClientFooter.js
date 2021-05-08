import React from "react";
import { Link } from "react-router-dom";

const ClientFooter = () => {
  return (
    <footer>
      <div className="EL__footer">
        <div className="footer__container rightfooter">
          <div className="a1p">
            <ul>
              <strong>Datos de Contacto</strong>
              <li>
                <Link to="/">+51 945 072 482</Link>
              </li>
              <li>
                <Link to="/">wasioperu@gmail.com</Link>
              </li>
            </ul>
            <ul>
              <strong>Acerca de Nosotros</strong>
              <li>
                <Link to="/">¿Quiénes somos?</Link>
              </li>
              <li>
                <Link to="/">Nuestros productos</Link>
              </li>
            </ul>
          </div>
          <div className="a2p">
            <ul>
              <strong>Atención al cliente</strong>
              <li>
                <Link to="/">Protección de datos</Link>
              </li>
              <li>
                <Link to="/">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/">Cambios y Devoluciones</Link>
              </li>
              <li>
                <Link to="/">Política de Envíos</Link>
              </li>
            </ul>
            <ul>
              <ul>
                <strong>Siguenos</strong>
                <li>
                  <Link to="/">Wasio</Link>
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
                <Link to="/">
                  Bello Horizonte <br /> F8, Cayma, <br /> Arequipa, Perú
                </Link>
              </li>
            </ul>
            <ul>
              <strong>Ayuda</strong>
              <li>
                <Link to="/">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to="/">Mi cuenta</Link>
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
