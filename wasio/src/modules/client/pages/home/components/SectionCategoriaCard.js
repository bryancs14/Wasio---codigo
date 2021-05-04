import React from "react";

const SectionCategoriaCard = ({objProducto}) => {
  return (
    <div className="card2">
      <div className="card__descuento">-{objProducto.porc_descuento}%</div>
      <img
        className="card__img"
        src={objProducto.imagen}
        alt=""
      />
      <div className="card__body">
        <p className="card__title">{objProducto.nombre}</p>
        <div className="card__precio">
          <p>S/. {objProducto.precio}</p>
          <p className="precio__descuento">S/. {objProducto.precio - (objProducto.precio * objProducto.porc_descuento / 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCategoriaCard;
