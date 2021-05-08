import React, { useEffect, useState } from "react";
import { getTienda } from "../../../../services/tiendaService";
import Flickity from "react-flickity-component";
import "../../../../styles/Flickity.css";
import { useHistory } from "react-router";

const TiendasPage = () => {
  const [tienda, setTienda] = useState([]);

  const history = useHistory();

  const traerTiendas = () => {
    getTienda().then((rpta) => {
      setTienda(rpta.data);
    });
  };

  useEffect(() => {
    traerTiendas();
  }, []);

  function Carousel() {
    return (
      <Flickity>
        {tienda.map((marca) => {
          return (
            <div class="card col-md-11" onClick={() => {history.push(`/tienda/${marca.id}`)}}>
            <div class="card-body" >
              <h5 class="card-title">{marca.nomb_marca}</h5>
              <p class="card-text">
                {marca.descripcion}
              </p>
            </div>
            <img
              src={marca.img_portada}
              class="card-img-bottom"
              alt=" "
              style = {{height: "100%"}}
            />
          </div>
          );
        })}
      </Flickity>
    );
  }

  return (
    <div style={{ height: "100%"}}>
      <Carousel />
    </div>
  );
};

export default TiendasPage;
