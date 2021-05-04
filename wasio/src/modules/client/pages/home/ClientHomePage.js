import React, { useEffect, useState } from "react";
import "./../../../../styles/home.css"
import banner from "./../../../../assets//img/main__banner.png";
import HomeSectionCategoria from "./components/HomeSectionCategoria";
import { getCategorias } from "../../../../services/categoriasServices";

const ClientHomePage = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then(rpta => {
      if(rpta.request.status === 200) {
        setCategorias(rpta.data)
      }
    })
  }, [])

  return (
    <>
      <main className="main">
        <aside className="aside__bar ">
          <nav className="sidebar__nav">
            <ul className="sidebar__list">
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Mujer">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Hombre">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Tecnología">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Hogar">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Deporte">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li className="sidebar__ite">
                <a className="sidebar__link" href="#" data-title="Tienda y marcas">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <figure className="box">
          <img src={banner} alt="Cargando imagen..." />
        </figure>

        <div className="galeria__wrapper">
          <div className="divs__info">
            <div className="padrastro">
              <div className="divs__info1">
                <div className="i__divsinfo">
                  {" "}
                  <i className="fas fa-check-circle    "></i>
                </div>
                <div className="text__divsinfo">
                  <p className="sub__divsinfo">Compra 100% segura</p>
                  <p className="info__divsinfo">
                    Compra con cualquier medio de pago, garantizamos seguridad
                    en todo el proceso de tu compra.
                  </p>
                </div>
              </div>
              <div className="divs__info2">
                <div className="i__divsinfo">
                  {" "}
                  <i className="fas fa-question    "></i>
                </div>
                <div className="text__divsinfo">
                  <p className="sub__divsinfo">Wasio aclara tus dudas</p>
                  <p className="info__divsinfo">
                    {" "}
                    Ingresa a nuestra seccion de Preguntas y Respuestas.
                  </p>
                </div>
              </div>
            </div>
            <div className="padrastro">
              <div className="divs__info3">
                <div className="i__divsinfo">
                  {" "}
                  <i className="fas fa-exchange-alt    "></i>
                </div>
                <div className="text__divsinfo">
                  <p className="sub__divsinfo">Devoluciones gratis</p>
                  <p className="info__divsinfo">
                    Sin costo adicional y nosotros lo recogemos desde la puerta
                    de tu casa.
                  </p>
                </div>
              </div>
              <div className="divs__info4">
                <div className="i__divsinfo">
                  {" "}
                  <i className="fas fa-people-carry    "></i>
                </div>
                <div className="text__divsinfo">
                  <p className="sub__divsinfo">Servicio de entrega</p>
                  <p className="info__divsinfo">
                    Contamos con delivery rápido y económico, cumpliendo los
                    protocolos de seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="padre1">
            <div className="padrastro">
              <div className="p1Hijo1"></div>
              <div className="p1Hijo2"></div>
            </div>
            <div className="padrastro">
              <div className="p1Hijo3"></div>
              <div className="p1Hijo4"></div>
            </div>
          </div>
          <div className="padre2">
            <div className="p2Hijo1"></div>
            <div className="p2Hijo2"></div>
          </div>
          <div className="padre3">
            <div className="p3Hijo1"></div>
            <div className="p3Hijo2"></div>
            <div className="p3Hijo3"></div>
          </div>
          <div className="padre4">
            <div className="padrastro">
              <div className="p4Hijo1"></div>
              <div className="p4Hijo2"></div>
            </div>
            <div className="padrastro">
              <div className="p4Hijo3"></div>
              <div className="p4Hijo4"></div>
            </div>
          </div>
          <div className="padre5">
            <div className="p5Hijo1"></div>
          </div>
        </div>

        <div className="navbar2">
          <div className="navbar2__wrapper">
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_MUJER.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Mujer</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_BOLSOS_Y_ACCESORIOS.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Bolsos y Accesorios</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_CALZADO.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Calzado</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_TECNOLOGIA.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Tecnología</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_HOGAR.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Hogar</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_DEPORTE.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Deporte</p>
            </div>
            <div className="navbar2__item">
              <li>
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_TIENDAS_MARCAS.png"
                    alt=""
                  />
                </a>
              </li>
              <p>Marcas</p>
            </div>
          </div>
        </div>
        {
          categorias.map(objCategoria => {
            return <HomeSectionCategoria objCategoria={objCategoria} key={objCategoria.id}/>
          })
        }
      </main>
      <footer>
        <div className="footer__container">
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
        <div className="footer__container">
          <div className="footer__container left">
            <ul>
              <strong>Dirección</strong>
              <li>
                <a href=""> Bello Horizonte F8, Cayma, Arequipa, Perú</a>
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
      </footer>
    </>
  );
};

export default ClientHomePage;
