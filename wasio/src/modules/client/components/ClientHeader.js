import React, { useContext, useRef } from "react";
import { useHistory } from "react-router";

import "../../../styles/Header.css";
import {NavLink} from 'react-router-dom'
import CarritoContext from "../../../context/carrito/carritoContext";

const ClientHeader = () => {

const {setTag, carrito} = useContext(CarritoContext);


const refInputBusqueda = useRef();

const history = useHistory();

const handleSubmit = e => {
  setTag("");
  if (e.keyCode === 13 &&
    refInputBusqueda.current.value.trim() !== ""   
    ){
    setTag(refInputBusqueda.current.value.trim());
    history.push("/productos");
    
  }
}


  return (
    <header class="header">
      <div class="header__wrapper seccion1">
        <div class="header__main">
          <div class="btn__mq2">
            <button class="btn__menu open">&#9776;</button>
            <div class="buscadormq">
              <button type="submit" class="fas fa-search"></button>
              <input
                class="buscarmq open-mobile"
                type="text"
                placeholder="Buscar"
                onKeyUp={handleSubmit}
                ref={refInputBusqueda}
              />
            </div>
          </div>

          <div class="header__logo">
            <NavLink to="/">
            <figure class="figure__logo">
              <img
                class="imagen__logo"
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/logo/Logotipo.png"
                alt=""
              />
            </figure>
            </NavLink>
          </div>

          <div class="header__buscador">
            <div class="buscador">
              <button type="submit" class="fas fa-search"></button>
              <input class="buscar" 
              type="text" 
              placeholder="Buscar" 
              onKeyUp={handleSubmit}
              ref={refInputBusqueda}/>
            </div>
          </div>

          <div class="header__links">
            <li>
              <a href="#" class="lih link__Micuenta">
                <button class="fas fa-user"></button>
                <p class="text__header__link mc">Iniciar Sesi??n</p>
              </a>
            </li>
            <li>
              <a href="#" class="lih link__Carrito">
                <NavLink to="/carrito"><button class="fas fa-shopping-cart"></button></NavLink>
                <div class="car__div">
                  <p class="text__header__link car" id="Carrito__contador">{carrito.length}
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
                Tecnolog??a
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
  );
};

export default ClientHeader;
