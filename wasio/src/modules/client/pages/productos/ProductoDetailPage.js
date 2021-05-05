import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../../../services/productosService";
import "../../../../styles/ProductoDetail.css";

const ProductoDetailPage = (props) => {
  let params = useParams();
  let productoId = params.id;

  const [objProducto, setObjProducto] = useState(null);

  useEffect(() => {
    getProductoById(productoId).then((rpta) => {
      setObjProducto(rpta.data);
      console.log(rpta.data);
    });
  }, []);

  return (
    <main>
    <div class="contenedor-wraper">
      <div class="ruta-pagina">
        <p>Inicio / <span>SANDALIA PLANA DE VERANO</span></p>
      </div>
      <div class="contenedor-producto">
        <section class="seccion-principal">
          <section class="imagenes-producto">
            <div class="contenedor-imagenes">
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                alt="prenda pijama"
                width="90"
              />
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil2-min.jpg"
                alt="prenda pijama"
                width="90"
              />
              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil3-min.jpg"
                alt="prenda pijama"
                width="90"
              />
            </div>
            <div class="imagen-principal">
              <div class="card__descuento">-20%</div>

              <img
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/banners/juvenil1-min.jpg"
                alt=""
              />
            </div>
          </section>

          <div class="contenedor-atributos-producto">
            <div class="atributos-producto">
              <h1>SANDALIA PLANA DE VERANO NEGRO/DORADO</h1>
              <hr />
              <div>
                <p>
                  Sandalia plana de verano, producto Trujillano, diseños
                  exclusivos, excelente calidad y garantía
                </p>
              </div>
              <h2>S/.50.00</h2>
              <div class="talla">
                <label for="">Talla:</label>
                <select name="" id="" class="input-select">
                  <option value="">35</option>
                  <option value="">36</option>
                  <option value="">37</option>
                  <option value="">38</option>
                  <option value="">39</option>
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
                <button class="btn-agregarcarrito">  AGREGAR AL CARRO</button>
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
    </div>
  </main>
  );
};

export default ProductoDetailPage;
