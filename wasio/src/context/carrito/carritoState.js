import React, { useState } from "react";
import CarritoContext from "./carritoContext";
import Swal from "sweetalert2";

const CarritoState = (props) => {
  const [productos, setProductos] = useState([]);
  const [tag, setTag] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [carrito, setCarrito] = useState([]);

  //SweetAlert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });


  //Agregar al carrito
  const agregarAlCarrito = (objProducto) => {
    let carritoTemporal = [...carrito];
    let posicion = carritoTemporal.findIndex(
      (objProductoCarrito) => objProductoCarrito.id === objProducto.id
    );

    if (posicion >= 0) {
      carritoTemporal[posicion].cantidad++;
      setCarrito(carritoTemporal);
    } else {
      carritoTemporal.push({
        ...objProducto,
        cantidad: 1,
      });
      setCarrito(carritoTemporal);
    }
  };


  //Eliminar Producto
  const eliminarProducto = (id) => {
    let carritoTemporal = [...carrito];
    let posicion = carritoTemporal.findIndex(
      (objProducto) => objProducto.id === id
    );
    carritoTemporal.splice(posicion, 1);
    setCarrito(carritoTemporal);
  };

  return (
    <CarritoContext.Provider
      value={{
        productos,
        setProductos,
        tag,
        setTag,
        idCategoria,
        setIdCategoria,
        nombreCategoria,
        setNombreCategoria,
        Toast,
        carrito,
        agregarAlCarrito,
        eliminarProducto,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
