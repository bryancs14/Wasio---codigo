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
  const {
    productos,
    setProductos,
    tag,
    setTag,
    idCategoria,
    setIdCategoria,
    nombreCategoria,
  } = useContext(CarritoContext);

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
    <main class="container container-fluid">
      <div class="row">
        <div class="col-md-3 mt-3 naranja">
          <ProductosFilter />
        </div>
        <div class="col-md-9 mb-3 mt-3 rojo">
          {tag.length > 0 && (
            <span
              className="badge bg-secondary mb-3"
              onClick={() => {
                traerProductos();
                setTag("");
                setIdCategoria("");
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
                setTag("");
              }}
            >
              {nombreCategoria} &times;
            </span>
          )}
          {productos.length > 0 ? (
            <Productos productos={productos} />
          ) : (
            <div class="alert alert-danger" role="alert">
              No se encontraron productos!
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductosPage;
