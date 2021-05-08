import React, { useContext } from "react";
import { useHistory } from "react-router";
import CarritoContext from "../../../../context/carrito/carritoContext";
import "../../../../styles/carrito.css";


const CarritoPage = () => {
  const { carrito, eliminarProducto, Toast } = useContext(CarritoContext);
  console.log(carrito);

  const history = useHistory();

  let total = carrito.reduce((sumatoria, objProducto) => {
    return sumatoria + objProducto.precio * objProducto.cantidad;
  }, 0);

  return (
    <main>
      <div className="contenedor-wraper">
        <section>
          <div>
            <p>
              Inicio / <span>Caja</span>
            </p>
          </div>
        </section>
        <section className="contenedor-principal">
          <div className="lista-compras">
            <div className="titulo-lista">
              <div className="titulo">Carro de compras</div>
              <div className="cabeceras">
                <div>Precio</div>
                <div>Cantidad</div>
                <div>Subtotal</div>
              </div>
            </div>
            {carrito.map((objProducto, i) => {
              return (
                <div className="fila-producto">
                  <div className="img-descripcion">
                    <figure>
                      <img
                        className="img-productos"
                        src={objProducto.imagen[0]}
                        alt=""
                      />
                    </figure>
                    <div className="detalles-producto">
                      <h5>{objProducto.nombre}</h5>
                      <i>Stock disponible</i>
                      <small>SKU:VMPS2Rojo</small>
                      <a href="#" class="link-danger" onClick={() => {eliminarProducto(objProducto.id); Toast.fire({
                    icon: 'warning',
                    title: 'Producto eliminado'
                  });}}>
                        Eliminar
                      </a>
                    </div>
                  </div>
                  <div className="cabeceras">
                    <div>S/ {(objProducto.precio).toFixed(2)}</div>
                    <div className="cuadrado">
                      <p>{objProducto.cantidad}</p>
                    </div>
                    <div>S/ {(objProducto.precio * objProducto.cantidad).toFixed(2)}</div>
                  </div>
                </div>
              );
            })}

            <div className="fila-total">
            <p className="p-total"><strong>TOTAL</strong></p>
              <p className="p-total">S/ {total.toFixed(2)}</p>
            </div>
          </div>
          <aside className="contenedor-aside">
            <div className="contenedor-precios">
              <div className="texto-precios">
                <p>Precio Regular</p>
                <p className="precio">S./  {total.toFixed(2)}</p>
              </div>
              <div className="texto-precios">
                <p>Descuento</p>
                <p className="precio">S./ 2500</p>
              </div>

              <div className="texto-precios">
                <p>Precio con descuento</p>
                <p className="precio descuento">S./ 2500</p>
              </div>
              <button className="boton-pago" onClick={() => {history.push('/pago')}}>IR A PAGAR</button>
              <small className="disclaimer">
                Los códigos promocionales se pueden utilizar en la página
                siguiente
              </small>
            </div>
          </aside>
        </section>
        {/* <!-- SECCION SUSRIPCION --> */}
        <section className="seccion-suscripcion">
          <figure>
            <img
              className="img_suscripcion"
              src="https://aws-samishop-recursos.s3.amazonaws.com/00000D3E/es-PE/images/icons/WEB_WASIO_HOME_MATERIAL_TRAMA.png"
              alt=""
            />
          </figure>
          <div className="seccion-suscripcion">
            <p className="suscribete">Suscríbete a nuestro newsletter</p>
            <p>...Sé el primero en recibir todas las ofertas y promociones</p>
            <form className="input-container">
              <input
                className="input-suscribete"
                type="text"
                placeholder="Ingrese su correo"
              />
              <button className="btn-subscribete">&gt;</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CarritoPage;
