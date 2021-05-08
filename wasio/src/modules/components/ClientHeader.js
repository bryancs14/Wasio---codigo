import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { getCategorias } from "../../services/categoriasService";
import "../../styles/Header.css";

const ClientHeader = () => {

  const [categorias, setCategorias] = useState([]);

  const {usu_nom, usu_tipo} = useContext(AuthContext);

  useEffect(() => {
    getCategorias().then(rpta => {
      if(rpta.request.status === 200) {
        setCategorias(rpta.data);
      }
    })
  }, [])

  return (
    <>
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
                <i  className="fas fa-search"></i>
                <input className="buscar" type="text" placeholder="Buscar" />
              </div>
            </div>

            <div className="header__links">
              <li>
                {
                  usu_nom ?
                  <Link to={usu_tipo==="admin" ? "/admin" : "/"} className="lih link__Micuenta">
                    <i className="fas fa-user"></i>
                    <p className="text__header__link mc">{usu_nom}</p>
                  </Link> :
                  <Link to="/auth/login" className="lih link__Micuenta">
                    <i className="fas fa-user"></i>
                    <p className="text__header__link mc">Iniciar Sesión</p>
                  </Link>
                }
              </li>
              <li>
                <Link to="" className="lih link__Carrito">
                  <i className="fas fa-shopping-cart"></i>
                  <div className="car__div">
                    <p
                      className="text__header__link car"
                      id="Carrito__contador"
                    >
                      0
                    </p>
                  </div>
                </Link>
              </li>
            </div>
          </div>
          <div className="patron__header"></div>
        </div>

        <div className="header__wrapper seccion2">
          <nav className="header__nav">
            <ul className="header__list">
              {
                categorias.map((objCategoria, i) => {
                  return(
                    <li key={i}>
                      <Link to="/" className="header__navlink">{objCategoria.nomb_categoria}</Link>
                    </li>
                  );
                })
              }
              <li>
                <Link to="/" className="header__navlink">Marcas</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__wrapper seccion3">
          <p>BIENVENIDOS A WASIO</p>
        </div>
      </header>
      
        <nav className="sidebar__nav open">
          <ul className="sidebar__list">
            {
              categorias.map((objCategoria, i) => {
                return (
                  <li className="sidebar__ite" key={i}>
                    <Link className="sidebar__link" to="/" data-title={objCategoria.nomb_categoria}>
                      <span>
                        <span></span>
                      </span>
                    </Link>
                  </li>
                );
              })
            }
            <li className="sidebar__ite">
              <Link className="sidebar__link" to="/" data-title="Marcas">
                <span>
                  <span></span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      
    </>
  );
};

export default ClientHeader;
