import React, { useEffect, useState } from "react";
import { getProductos } from "../../../../services/productosService";
import Productos from "./components/Productos";
import ProductosFilter from "./components/ProductosFilter";

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);



  const traerProductos = () => {
    getProductos().then(rpta => {
      setProductos(rpta.data);
    })
  }

  useEffect(() => {
    traerProductos();
  }, []);




  return (
    <main class="container">
      <div class="row">
        <div class="col-lg-2 mt-3 naranja">
          <ProductosFilter />
        </div>
        <div class="col-lg-10 mb-3 mt-3 rojo">
          <Productos productos={productos}/>
        </div>
      </div>
    </main>
  );
};

export default ProductosPage;
