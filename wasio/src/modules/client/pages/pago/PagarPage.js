import React, { useContext, useRef, useState } from "react";
import CarritoContext from "../../../../context/carrito/carritoContext";
import "../../../../styles/PagarPage.css";
import PagoModal from "../../components/PagoModal";

const PagarPage = () => {
  const { carrito } = useContext(CarritoContext);

  const [mostrar, setMostrar] = useState(false);

  let total = carrito.reduce((sumatoria, objProducto) => {
    return sumatoria + objProducto.precio * objProducto.cantidad;
  }, 0);

  let fecha = new Date();

  let fechaPedido = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

  const formRef1 = useRef();
  const formRef2 = useRef();

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    referencia: "",
    telefono: 0,
    pais: "Perú",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "0",
  });

  // const [formulario2, setFormulario2] = useState({
  //   nombre: "",
  //   apellido: "",
  //   direccion: "",
  //   referencia: "",
  //   telefono: 0,
  //   pais: "Perú",
  //   departamento: "Lima",
  //   provincia: "Lima",
  //   distrito: "0",
  //   email: 
  // });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    console.log(formulario);
  };

  const handleSubmit = (e) => {
    console.log("AAAAA");
  };

  return (
    <main>
      <div class="contenedor-wraper">
        <section>
          <div>
            <p>
              <a href="#">Inicio</a> / <span>Caja</span>
            </p>
          </div>
        </section>
        <section class="contenedor-principal">
          <section class="contenedor-caja">
            <section class="caja">
              <h2>Caja</h2>
              <div>
                <h3>Dirección de envío</h3>
                <form class="form-superior">
                  <section class="seccion-formulario">
                    <div class="div-formulario">
                      <label for="">Nombre (*):</label>
                      <input
                        type="text"
                        class="input-formulario"
                        required
                        name="nombre"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="div-formulario">
                      <label for="">Apellido (*):</label>
                      <input
                        type="text"
                        class="input-formulario"
                        required
                        name="apellido"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="div-formulario">
                      <label for="">Dirección (*):</label>
                      <input
                        type="text"
                        class="input-formulario"
                        required
                        name="direccion"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="div-formulario">
                      <label for="">Referencia:</label>
                      <input
                        type="text"
                        name="referencia"
                        onChange={handleChange}
                        class="input-formulario"
                      />
                    </div>
                    <div class="div-formulario">
                      <label for="">Teléfono (*):</label>
                      <input
                        type="text"
                        class="input-formulario"
                        name="telefono"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </section>
                  <section class="seccion-formulario">
                    <div class="div-formulario">
                      <label for="">País (*):</label>
                      <select
                        id=""
                        class="input-formulario"
                        value={formulario.pais}
                        name="pais"
                        onChange={handleChange}
                      >
                        <option key="1" value="Perú">
                          Perú
                        </option>
                      </select>
                    </div>
                    <div class="div-formulario">
                      <label for="">Departamento:</label>
                      <select
                        name="departamento"
                        id=""
                        class="input-formulario"
                        value={formulario.departamento}
                      >
                        <option value="Lima">Lima</option>
                      </select>
                    </div>
                    <div class="div-formulario">
                      <label for="">Provincia:</label>
                      <select
                        name="provincia"
                        id=""
                        class="input-formulario"
                        value={formulario.provincia}
                      >
                        <option value="Lima">Lima</option>
                      </select>
                    </div>
                    <div class="div-formulario">
                      <label for="">Distrito:</label>
                      <select
                        name="distrito"
                        id=""
                        class="input-formulario"
                        onChange={handleChange}
                      >
                        <option value="0">Seleccione</option>
                        <option value="Cercado de Lima">Cercado de Lima</option>
                        <option value="La Victoria">La Victoria</option>
                        <option value="San Martín de Porres">
                          San Martín de Porres
                        </option>
                        <option value="El Agustino">El Agustino</option>
                        <option value="Pueblo Libre">Pueblo Libre</option>
                        <option value="Breña">Breña</option>
                      </select>
                    </div>
                  </section>
                </form>
              </div>
              <div>
                <div class="encabezado-form2">
                  <h3>Información de contacto:</h3>
                  <div class="radio-checkbox">
                    <label for="">Igual que mi dirección de envío</label>
                    <input type="checkbox" name="aaa" id="aaa" />
                  </div>
                </div>
                <form class="formulario2">
                  <div class="radio-bf">
                    <div class="radio-checkbox">
                      <label for="">Boleta</label>
                      <input type="radio" value="" name="TipodePago" />
                    </div>
                    <div class="radio-checkbox">
                      <label for="">Factura</label>
                      <input type="radio" value="" name="TipodePago" />
                    </div>
                  </div>
                  <div class="division-formulario form-superior">
                    <section class="seccion-formulario">
                      <div class="div-formulario">
                        <label for="">Nombre (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                      <div class="div-formulario">
                        <label for="">Apellido (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                      <div class="div-formulario">
                        <label for="">Dirección (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                      <div class="div-formulario">
                        <label for="">Referencia:</label>
                        <input type="text" class="input-formulario" />
                      </div>
                      <div class="div-formulario">
                        <label for="">Teléfono (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                      <div class="div-formulario">
                        <label for="">Tipo de documento (*):</label>
                        <select name="" id="" class="input-formulario">
                          <option value="">DNI</option>
                          <option value="">Carne de extranjeria</option>
                        </select>
                      </div>

                      <div class="div-formulario">
                        <label for="">Nro de documento (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                    </section>
                    <section class="seccion-formulario">
                      <div class="div-formulario">
                        <label for="">País (*):</label>
                        <select name="" id="" class="input-formulario">
                          <option value="">Lima</option>
                        </select>
                      </div>
                      <div class="div-formulario">
                        <label for="">Departamento:</label>
                        <select name="" id="" class="input-formulario">
                          <option value="">Lima</option>
                        </select>
                      </div>
                      <div class="div-formulario">
                        <label for="">Provincia:</label>
                        <select name="" id="" class="input-formulario">
                          <option value="">Lima</option>
                        </select>
                      </div>
                      <div class="div-formulario">
                        <label for="">Distrito:</label>
                        <select name="" id="" class="input-formulario">
                          <option value="">Lima</option>
                        </select>
                      </div>
                      <div class="div-formulario">
                        <label for="">Dirección Email (*):</label>
                        <input type="text" class="input-formulario" />
                      </div>
                    </section>
                  </div>
                </form>
              </div>
            </section>
            <section>
              <div class="radio-checkbox">
                <input type="checkbox" name="" id="" />
                <label for="">
                  Si, acepto brindar mis datos personales y estoy de acuerdo con
                  los términos y condiciones.
                </label>
              </div>
              <div class="radio-checkbox">
                <input type="checkbox" name="" id="" />
                <label for="">
                  Acepto recibir comunicaciones y promociones de la marca.
                </label>
              </div>
            </section>
            <div>
              <h3>Formas de Pago</h3>
              <div class="contenedor-formadepago">
                <div class="contorno-cabecera-pago">
                  <div class="cabecera-pago">
                    <input type="radio" name="modo-pago" id="" />
                    <img
                      class="img_pago"
                      src="https://geozevallos.github.io/WasioPlace/src/img/bancos.png"
                      id="imgpay_1"
                    />
                    <label for=""> Pagar con tarjeta</label>
                  </div>
                </div>
                <div class="descripcion-contenedor">
                  <div class="descripcion-metodoPago">
                    <ul>
                      <li>
                        Realice sus pagos directamente con su tarjeta de Crédito
                        o Débito.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="contenedor-formadepago">
                <div class="contorno-cabecera-pago">
                  <div class="cabecera-pago">
                    <input type="radio" name="modo-pago" id="" />
                    <img
                      class="img_pago"
                      src="https://geozevallos.github.io/WasioPlace/src/img/moneda.png"
                      id="imgpay_1"
                    />
                    <label for=""> Transferencia bancaria</label>
                  </div>
                </div>
                <div class="descripcion-contenedor">
                  <div class="descripcion-metodoPago">
                    <ul>
                      <li>
                        Realice sus pagos directamente con transferencia
                        bancaria.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside class="contenedor-aside">
            <div class="contenedor-aside-precios">
              <div class="contenedor-precios">
                <h3>Resumen de la orden</h3>
                <div class="texto-precios">
                  <p>Items</p>
                  <p class="precio">{carrito.length}</p>
                </div>

                <div class="texto-precios">
                  <p>Subtotal</p>
                  <p class="precio">S./ {total.toFixed(2)}</p>
                </div>
                <div class="texto-precios">
                  <p>Descuento</p>
                  <p class="precio">S./ 2500</p>
                </div>
                <div class="texto-precios">
                  <p>Envío</p>
                  <p class="precio">S./ 15.00</p>
                </div>

                <div class="texto-precios">
                  <p>TOTAL</p>
                  <p class="precio descuento">S./ {(total + 15).toFixed(2)}</p>
                </div>
                <p>Certificados y cupones</p>
                <div class="descuento-cupon">
                  <input class="input-dscto" type="text" />
                  <button class="boton-descuento">APLICAR</button>
                </div>
                <button
                  class="boton-pago"
                  onClick={() => {
                    setMostrar(true);
                  }}
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </aside>
        </section>
        {/* <!-- SECCION SUSRIPCION --> */}
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
      <PagoModal
        mostrar={mostrar}
        setMostrar={setMostrar}
        carrito={carrito}
        formulario={formulario}
        fechaPedido={fechaPedido}
        total={total}
      />
    </main>
  );
};

export default PagarPage;
