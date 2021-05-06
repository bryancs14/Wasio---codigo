import React, { useContext, useEffect, useState } from "react";
import CarritoContext from "../../../../../context/carrito/carritoContext";
import { getCategorias } from "../../../../../services/categoriaService";

const ProductosFilter = () => {
  const [categorias, setCategorias] = useState([]);

  const {setIdCategoria, setNombreCategoria} = useContext(CarritoContext);

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
      <h5 className="text-center">Filter product</h5>
      <hr />
      <ul className="list-group">
        { 
        categorias.map((categoria) => {
          return (
            <li className="list-group-item"
            onClick={()=>{setIdCategoria(categoria.id);
                setNombreCategoria(categoria.nomb_categoria)
            }
            }>
                {categoria.nomb_categoria}
             </li>
          )
        }) 
    }
      </ul>
    </>
  );
};

export default ProductosFilter;
