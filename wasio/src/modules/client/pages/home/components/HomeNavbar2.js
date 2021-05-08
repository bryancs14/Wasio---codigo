import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeNavbar2 = ({ categorias }) => {
  return (
    <div className="navbar2">
      <div className="navbar2__wrapper">
        {categorias.map((objCategoria) => {
          return (
            <div className="navbar2__item" key={objCategoria.id}>
              <li>
                <Link to="">
                  <img src={objCategoria.img_categoria} alt="" />
                </Link>
              </li>
              <p>{objCategoria.nomb_categoria}</p>
            </div>
          );
        })}
        <div className="navbar2__item">
          <li>
            <Link to="">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/files/I_ICONO_TIENDAS_MARCAS.png"
                alt=""
              />
            </Link>
          </li>
          <p>Marcas</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar2;
