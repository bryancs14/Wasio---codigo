import React, { useState } from "react";
import CarritoContext from "./carritoContext";

const CarritoState = (props) => {
  const [productos, setProductos] = useState([]);
  const [tag, setTag] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [nombreCategoria, setNombreCategoria] = useState("");



  return (
    <CarritoContext.Provider value={{
        productos,
        setProductos,
        tag,
        setTag,
        idCategoria,
        setIdCategoria,
        nombreCategoria, 
        setNombreCategoria
    }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
