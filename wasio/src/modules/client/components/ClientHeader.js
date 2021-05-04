import React from "react";
import "../../../styles/Header.css";

const ClientHeader = () => {
  return (
    <header className="header">
      <div className="header__wrapper seccion1">
        <div className="header__main">
          <div className="btn__mq2">
            <button className="btn__menu open">&#9776;</button>
            <div className="buscadormq">
              <button type="submit" className="fas fa-search"></button>
              <input
                className="buscarmq open-mobile"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>

          <div className="header__logo">
            <figure className="figure__logo">
              <img
                className="imagen__logo"
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/logo/Logotipo.png"
                alt=""
              />
            </figure>
          </div>

          <div className="header__buscador">
            <div className="buscador">
              <button type="submit" className="fas fa-search"></button>
              <input className="buscar" type="text" placeholder="Buscar" />
            </div>
          </div>

          <div className="header__links">
            <li>
              <a href="#" className="lih link__Micuenta">
                <button className="fas fa-user"></button>
                <p className="text__header__link mc">Iniciar Sesión</p>
              </a>
            </li>
            <li>
              <a href="#" className="lih link__Carrito">
                <button className="fas fa-shopping-cart"></button>
                <div className="car__div">
                  <p className="text__header__link car" id="Carrito__contador">
                    0
                  </p>
                </div>
              </a>
            </li>
          </div>
        </div>
        <div className="patron__header"></div>
      </div>

      <div className="header__wrapper seccion2">
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="#" className="header__navlink">
                Mujer
              </a>
            </li>
            <li>
              <a href="#" className="header__navlink">
                Hombre
              </a>
            </li>
            <li>
              <a href="#" className="header__navlink">
                Tecnología
              </a>
            </li>
            <li>
              <a href="#" className="header__navlink">
                Hogar
              </a>
            </li>
            <li>
              <a href="#" className="header__navlink">
                Deporte
              </a>
            </li>
            <li>
              <a href="#" className="header__navlink">
                Tienda y marcas
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__wrapper seccion3">
        <p>BIENVENIDOS A WASIO</p>
      </div>
    </header>
  );
};

export default ClientHeader;
