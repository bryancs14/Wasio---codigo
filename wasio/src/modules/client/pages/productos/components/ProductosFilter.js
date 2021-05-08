import React, { useContext, useEffect, useState } from "react";
import CarritoContext from "../../../../../context/carrito/carritoContext";
import { getCategorias } from "../../../../../services/categoriaService";

const ProductosFilter = () => {
  const [categorias, setCategorias] = useState([]);

  const { setIdCategoria, setNombreCategoria } = useContext(CarritoContext);

  const traerCategorias = () => {
    getCategorias().then((rpta) => {
      setCategorias(rpta.data);
    });
  };

  useEffect(() => {
    traerCategorias();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6 className="text-center">Filtrar por categoría</h6>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-item-action">
            {categorias.map((categoria) => {
              return (
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    setIdCategoria(categoria.id);
                    setNombreCategoria(categoria.nomb_categoria);
                  }}
                >
                  {categoria.nomb_categoria}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductosFilter;
