import React, { useEffect, useState } from "react";
import { getProductos } from "../../../../../services/productosService";
import trama from "./../../../../../assets/img/trama.png";
import SectionCategoriaCard from "./SectionCategoriaCard";

const HomeSectionCategoria = ({objCategoria}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(rpta => {
      if(rpta.request.status === 200) {
        setProductos(rpta.data.filter(objProducto => objProducto.cat_id === objCategoria.id));
      }
    })
  }, [])

  return (
    <section className="categoria__section">
      <div className="titulo__section">
        <p>{objCategoria.nomb_categoria}</p>
        <figure>
          <img src={trama} alt="" />
        </figure>
      </div>
      <div className="carousel-container">
        <div className="carousel-nav-left"></div>
        <div className="carousel-nav-rigth"></div>
        <div className="carousel">
          {
            productos?.map(objProducto => {
              return <SectionCategoriaCard objProducto={objProducto} key={objProducto.id}/>
            })
          }
        </div>
      </div>
      <a href="" className="btn__verMas">
        Ver más productos
      </a>
    </section>
  );
};

export default HomeSectionCategoria;
