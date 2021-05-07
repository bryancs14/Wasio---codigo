import React from "react";
import { useHistory } from "react-router";

const Producto = ({ objProducto }) => {

  const history = useHistory();

  return (
      <div className="card">
        <img src={objProducto.imagen[0]} className="card-img-top" alt = ""/>
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
              <strong> - S/. {+objProducto.precio - ( (+objProducto.porc_descuento/100) * +objProducto.precio )}</strong>
            </span>
          </p>
          <div>
          <button type="button" class="btn btn-dark" onClick={() => {
        history.push(`/productos/${objProducto.id}`)
      }}>Ver producto</button>
          </div>
        </div>
      </div>
    
  );
};

export default Producto;
