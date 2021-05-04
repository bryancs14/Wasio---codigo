import React from "react";

const Producto = ({ objProducto }) => {
  return (
    
      <div className="card">
        <img src={objProducto.imagen[0]} class="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">{objProducto.nombre}</h5>
          <p className="card-text text-center">
            {objProducto.descripcion}
          </p>
          <p className="text-center">
            <strong>
              <strike>S/. {objProducto.precio}</strike>
            </strong>
            <span className="text-danger">
              <strong> - S/. {objProducto.descuento}</strong>
            </span>
          </p>
        </div>
      </div>
    
  );
};

export default Producto;
