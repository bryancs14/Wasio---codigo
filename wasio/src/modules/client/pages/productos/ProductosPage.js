import React, { useContext, useEffect, useState } from "react";
import CarritoContext from "../../../../context/carrito/carritoContext";
import {
  getProductos,
  getProductosByCategoria,
  getProductosBytag,
} from "../../../../services/productosService";
import Productos from "./components/Productos";
import ProductosFilter from "./components/ProductosFilter";

const ProductosPage = () => {
  const { productos, setProductos, tag, setTag, idCategoria, setIdCategoria, nombreCategoria } = useContext(CarritoContext);

  const traerProductos = () => {
    getProductos().then((rpta) => {
      setProductos(rpta.data);
    });
  };

  useEffect(() => {
    traerProductos();
  }, []);

  useEffect(() => {
    if (tag !== "") {
      getProductosBytag(tag).then((rpta) => {
        setProductos(rpta.data);
      });
    }
  }, [tag]);

  useEffect(() => {
    if (idCategoria !== "") {
      getProductosByCategoria(idCategoria).then((rpta) => {
        setProductos(rpta.data);
      });
    }
  }, [idCategoria]);

  return (
    <main class="container">
      <div class="row">
        <div class="col-lg-2 mt-3 naranja">
          <ProductosFilter />
        </div>
        <div class="col-lg-10 mb-3 mt-3 rojo">
          {tag.length > 0 && (
            <span
              className="badge bg-secondary mb-3"
              onClick={() => {
                traerProductos();
                setTag("");
              }}
            >
              {tag} &times;
            </span>
          )}
          {idCategoria.length > 0 && (
            <span
              className="badge bg-secondary mb-3"
              onClick={() => {
                traerProductos();
                setIdCategoria("");
              }}
            >
              {nombreCategoria} &times;
            </span>
          )}
          <Productos productos={productos} />
        </div>
      </div>
    </main>
  );
};

export default ProductosPage;
