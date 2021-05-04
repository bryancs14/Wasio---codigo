import React from "react";
import trama from "./../../../../assets/img/trama.png";
import banner from "./../../../../assets//img/main__banner.png";

const ClientHomePage = () => {
  return (
    <>
      <header class="header">
        <div class="header__wrapper seccion1">
          <div class="header__main">
            <div class="btn__mq2">
              <button class="btn__menu open">&#9776;</button>
              <div class="buscadormq">
                <button type="submit" class="fas fa-search  "></button>
                <input
                  class="buscarmq open-mobile"
                  type="text"
                  placeholder="Buscar"
                />
              </div>
            </div>

            <div class="header__logo">
              <figure class="figure__logo">
                <img
                  class="imagen__logo"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/logo/Logotipo.png"
                  alt=""
                />
              </figure>
            </div>

            <div class="header__buscador">
              <div class="buscador">
                <button type="submit" class="fas fa-search  "></button>
                <input class="buscar" type="text" placeholder="Buscar" />
              </div>
            </div>

            <div class="header__links">
              <li>
                <a href="#" class="lih link__Micuenta">
                  <button class="fas fa-user"></button>
                  <p class="text__header__link mc">Iniciar Sesión</p>
                </a>
              </li>
              <li>
                <a href="#" class="lih link__Carrito">
                  <button class="fas fa-shopping-cart"></button>
                  <div class="car__div">
                    <p class="text__header__link car" id="Carrito__contador">
                      0
                    </p>
                  </div>
                </a>
              </li>
            </div>
          </div>
          <div class="patron__header"></div>
        </div>

        <div class="header__wrapper seccion2">
          <nav class="header__nav">
            <ul class="header__list">
              <li>
                <a href="#" class="header__navlink">
                  Mujer
                </a>
              </li>
              <li>
                <a href="#" class="header__navlink">
                  Hombre
                </a>
              </li>
              <li>
                <a href="#" class="header__navlink">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#" class="header__navlink">
                  Hogar
                </a>
              </li>
              <li>
                <a href="#" class="header__navlink">
                  Deporte
                </a>
              </li>
              <li>
                <a href="#" class="header__navlink">
                  Tienda y marcas
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__wrapper seccion3">
          <p>BIENVENIDOS A WASIO</p>
        </div>
      </header>

      <main class="main">
        <aside class="aside__bar ">
          <nav class="sidebar__nav">
            <ul class="sidebar__list">
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Mujer">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Hombre">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Tecnología">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Hogar">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Deporte">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
              <li class="sidebar__ite">
                <a class="sidebar__link" href="#" data-title="Tienda y marcas">
                  <span>
                    <span></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <figure class="box">
          <img src={banner} alt="Cargando imagen..." />
        </figure>

        <div class="galeria__wrapper">
          <div class="divs__info">
            <div class="padrastro">
              <div class="divs__info1">
                <div class="i__divsinfo">
                  {" "}
                  <i class="fas fa-check-circle    "></i>
                </div>
                <div class="text__divsinfo">
                  <p class="sub__divsinfo">Compra 100% segura</p>
                  <p class="info__divsinfo">
                    Compra con cualquier medio de pago, garantizamos seguridad
                    en todo el proceso de tu compra.
                  </p>
                </div>
              </div>
              <div class="divs__info2">
                <div class="i__divsinfo">
                  {" "}
                  <i class="fas fa-question    "></i>
                </div>
                <div class="text__divsinfo">
                  <p class="sub__divsinfo">Wasio aclara tus dudas</p>
                  <p class="info__divsinfo">
                    {" "}
                    Ingresa a nuestra seccion de Preguntas y Respuestas.
                  </p>
                </div>
              </div>
            </div>
            <div class="padrastro">
              <div class="divs__info3">
                <div class="i__divsinfo">
                  {" "}
                  <i class="fas fa-exchange-alt    "></i>
                </div>
                <div class="text__divsinfo">
                  <p class="sub__divsinfo">Devoluciones gratis</p>
                  <p class="info__divsinfo">
                    Sin costo adicional y nosotros lo recogemos desde la puerta
                    de tu casa.
                  </p>
                </div>
              </div>
              <div class="divs__info4">
                <div class="i__divsinfo">
                  {" "}
                  <i class="fas fa-people-carry    "></i>
                </div>
                <div class="text__divsinfo">
                  <p class="sub__divsinfo">Servicio de entrega</p>
                  <p class="info__divsinfo">
                    Contamos con delivery rápido y económico, cumpliendo los
                    protocolos de seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="padre1">
            <div class="padrastro">
              <div class="p1Hijo1"></div>
              <div class="p1Hijo2"></div>
            </div>
            <div class="padrastro">
              <div class="p1Hijo3"></div>
              <div class="p1Hijo4"></div>
            </div>
          </div>
          <div class="padre2">
            <div class="p2Hijo1"></div>
            <div class="p2Hijo2"></div>
          </div>
          <div class="padre3">
            <div class="p3Hijo1"></div>
            <div class="p3Hijo2"></div>
            <div class="p3Hijo3"></div>
          </div>
          <div class="padre4">
            <div class="padrastro">
              <div class="p4Hijo1"></div>
              <div class="p4Hijo2"></div>
            </div>
            <div class="padrastro">
              <div class="p4Hijo3"></div>
              <div class="p4Hijo4"></div>
            </div>
          </div>
          <div class="padre5">
            <div class="p5Hijo1"></div>
          </div>
        </div>

        <div class="navbar2">
          <div class="navbar2__wrapper">
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
            <div class="navbar2__item">
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
        <section>
          <div class="titulo__section">
            <p>MUJER</p>
            <figure>
              <img src={trama} alt="" />
            </figure>
          </div>
          <div class="carousel-container">
            <div class="carousel-nav-left"></div>
            <div class="carousel-nav-rigth"></div>
            <div class="carousel">
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="" class="btn__verMas">
            Ver más productos
          </a>
        </section>
        <section>
          <div class="titulo__section">
            <p>MUJER</p>
            <figure>
              <img src={trama} alt="" />
            </figure>
          </div>
          <div class="carousel-container">
            <div class="carousel-nav-left"></div>
            <div class="carousel-nav-rigth"></div>
            <div class="carousel">
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="" class="btn__verMas">
            Ver más productos
          </a>
        </section>
        <section>
          <div class="titulo__section">
            <p>MUJER</p>
            <figure>
              <img src={trama} alt="" />
            </figure>
          </div>
          <div class="carousel-container">
            <div class="carousel-nav-left"></div>
            <div class="carousel-nav-rigth"></div>
            <div class="carousel">
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/ANGIE1.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__descuento">-20%</div>
                <img
                  class="card__img"
                  src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                  alt=""
                />
                <div class="card__body">
                  <p class="card__title">PIJAMA ANGIE GASA YORYU 100...</p>
                  <div class="card__precio">
                    <p>S/ 106.25</p>
                    <p class="precio__descuento">- S/ 85.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="" class="btn__verMas">
            Ver más productos
          </a>
        </section>
        <section class="marcas">
          <div class="titulo__section">
            <p>MARCAS</p>
            <figure>
              <img src={trama} alt="" />
            </figure>
          </div>
          <div class="carousel-container">
            <div class="carousel-nav-left"></div>
            <div class="carousel-nav-rigth"></div>
            <ul class="carousel">
              <li class="marca">
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/gallery/9.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li class="marca">
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/gallery/9.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li class="marca">
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/gallery/9.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li class="marca">
                <a href="">
                  <img
                    src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/gallery/9.jpg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="envio">
          <figure>
            <img src={trama} alt="" />
          </figure>
          <div class="envio__container">
            <div class="envio__info">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_E5.png"
                alt=""
              />
            </div>
            <div class="envio__info">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_E8.png"
                alt=""
              />
            </div>
            <div class="envio__info">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_E5.png"
                alt=""
              />
            </div>
            <div class="envio__info">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_E8.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <figure>
            <img src={trama} alt="" />
          </figure>
          <div class="container__suscribete">
            <p class="suscribete">Suscríbete a nuestro newsletter</p>
            <p>...Sé el primero en recibir todas las ofertas y promociones</p>
            <form class="input__container">
              <input
                class="input__suscribete"
                type="text"
                placeholder="Ingrese su correo"
              />
              <button>Enviar</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div class="footer__container">
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
        <div class="footer__container">
          <div class="footer__container left">
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
          <figure class="footer__logo">
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
