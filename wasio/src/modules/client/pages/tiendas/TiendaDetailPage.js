import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getTiendaById } from "../../../../services/tiendaService";
import "../../../../styles/TiendaDetail.css";
import Producto from "../productos/components/Producto";
import { getProductosByTienda } from "../../../../services/productosService";
import CarritoContext from "../../../../context/carrito/carritoContext";

const TiendaDetailPage = () => {
  let params = useParams();
  let tiendaId = params.id;

  const { productos, setProductos } = useContext(CarritoContext);

  const [marcaTienda, setMarcaTienda] = useState(null);

  useEffect(() => {
    getTiendaById(tiendaId).then((rpta) => {
      setMarcaTienda(rpta.data);
    });
  }, []);

  useEffect(() => {
    getProductosByTienda(tiendaId).then((rpta) => {
      setProductos(rpta.data);
    });
  }, [tiendaId]);

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Inicio</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Tiendas y Marcas</a>
              </li>
              {marcaTienda ? (
                <li className="breadcrumb-item active" aria-current="page">
                  {marcaTienda.nomb_marca}
                </li>
              ) : null}
            </ol>
          </nav>
        </div>
      </div>

      <div>
        {marcaTienda ? (
          <>
            <img
              src={marcaTienda.img_portada}
              className="img-fluid"
            />
            <h4 className="text-center fs-2 mt-4">{marcaTienda.nomb_marca}</h4>
            <h5 className="mb-4">{marcaTienda.descripcion}</h5>
          </>
        ) : null}
      </div>
      <div className="row">
        {productos.map((objProducto) => {
          return <Producto objProducto={objProducto} />;
        })}
      </div>
    </main>
  );
};

export default TiendaDetailPage;
