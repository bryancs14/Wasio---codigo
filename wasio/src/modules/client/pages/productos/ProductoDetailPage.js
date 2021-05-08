import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../../../services/productosService";
import "../../../../styles/ProductoDetail.css";
import CarritoContext from "../../../../context/carrito/carritoContext";






const ProductoDetailPage = () => {

  const {Toast, agregarAlCarrito} = useContext(CarritoContext);

    const refSrcImagen = useRef();

    const changeImage = e => {
        refSrcImagen.current.src = e.target.src;
    }



  let params = useParams();
  let productoId = params.id;

  const [objProducto, setObjProducto] = useState(null);

  useEffect(() => {
    getProductoById(productoId).then((rpta) => {
      setObjProducto(rpta.data);
    });
  }, []);

  return (
    <main>
        {
            objProducto ? 
       
    <div class="contenedor-wraper">
      <div class="ruta-pagina">
        <p>Inicio / <span>{objProducto.nombre}</span></p>
      </div>
      <div class="contenedor-producto">
        <section class="seccion-principal">
          <section class="imagenes-producto">
            <div class="contenedor-imagenes">
                {
                    objProducto.imagen.map((obj) => {
                        return(
                            <img src={obj} alt = "" width = "90" onClick = {(e) => {
                                changeImage(e);
                            }}/>
                        )
                    })
                }

            </div>
            <div class="imagen-principal">
              <div class="card__descuento">-{objProducto.porc_descuento}%</div>

              <img
                src={objProducto.imagen[0]}
                alt=""
                ref={refSrcImagen}
              />
            </div>
          </section>

          <div class="contenedor-atributos-producto">
            <div class="atributos-producto">
              <h1>{objProducto.nombre}</h1>
              <hr />
              <div>
                <p>
                {objProducto.descripcion}
                </p>
              </div>
              <h2>S/. {objProducto.precio}</h2>
              <div class="talla">
                <label for="">Talla:</label>
                <select name="" id="" class="input-select">
                    {objProducto.detalle.Tallas.map((obj) => {
                        return(
                            <option value="">{obj}</option>
                        );

                    })}
                </select>
              </div>
              <div class="p-cantidad">
                <p><label for="">Cantidad:</label></p>
              </div>
              <div class="cantidad">
                <select name="" id="" class="input-select">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <button class="btn-agregarcarrito"
                onClick={() => {
                  Toast.fire({
                    icon: 'success',
                    title: 'Agregado al carrito'
                  });
                  agregarAlCarrito(objProducto);
                }}>  AGREGAR AL CARRO</button>
              </div>
            </div>
          </div>
        </section>
        <section class="descripcion-producto">
          <h2>DESCRIPCIÓN</h2>
          <div class="descripcion-detalle">
            <p>Sandalia plana</p>
            <p>Material: Trenzas</p>
            <p>Color: Negro/dorado</p>
            <p>Forro de planta: Yute beige</p>
            <p>Plantilla: Polibadana</p>
            <p>Tallas: 35 al 39</p>
          </div>
        </section>
      </div>
      <section class="otros-productos">
        <div>
          <p class="producto-interes">Productos que te podrían interesar</p>
          <p></p>
        </div>

        <section class="carrusel-productos">
          <div class="card">
            <img
              class="card-img"
              src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/camel-fondoblanco.jpg"
              alt=""
            />
            <div class="card-body">
              <p>Bolso Bucket Baby Camel</p>
              <p>S/ 42.00</p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img"
              src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/cyan-fondoblanco.jpg"
              alt=""
            />
            <div class="card-body">
              <p>Bolso Bucket Baby Camel</p>
              <p>S/ 42.00</p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img"
              src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/camel-fondoblanco.jpg"
              alt=""
            />
            <div class="card-body">
              <p>Bolso Bucket Baby Camel</p>
              <p>S/ 42.00</p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img"
              src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/negro-fondoblanco.jpg"
              alt=""
            />
            <div class="card-body">
              <p>Bolso Bucket Baby Camel</p>
              <p>S/ 42.00</p>
            </div>
          </div>
        </section>
        <div>
          <button class="btn-vermas">VER MÁS PRODUCTOS</button>
        </div>
      </section>
      <section class="seccion-suscripcion">
        <figure>
          <img
            class="img_suscripcion"
            src="https://aws-samishop-recursos.s3.amazonaws.com/00000D3E/es-PE/images/icons/WEB_WASIO_HOME_MATERIAL_TRAMA.png"
            alt=""
          />
        </figure>
        <div class="seccion-suscripcion">
          <p class="suscribete">Suscríbete a nuestro newsletter</p>
          <p>...Sé el primero en recibir todas las ofertas y promociones</p>
          <form class="input-container">
            <input
              class="input-suscribete"
              type="text"
              placeholder="Ingrese su correo"
            />
            <button class="btn-subscribete">&gt;</button>
          </form>
        </div>
      </section>
    </div> : null }
  </main>
  );
};

export default ProductoDetailPage;
