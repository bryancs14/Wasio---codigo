import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../../../../../context/authContext";
import { getCategorias } from "../../../../../services/categoriasService";
import { getMarcas } from "../../../../../services/marcasService";
import {
  getProductoById,
  postProducto,
  putProductoById,
} from "../../../../../services/productosService";

const AdminCrearProducto = () => {
  const formularioVacio = {
    nombre: "",
    cat_id: 0,
    marca_id: "",
    stock: 0,
    descripcion: "",
    precio: 0,
    porc_descuento: 0,
    detalle: {},
    imagen: "",
  };

  const history = useHistory();
  const { id_producto } = useParams();
  const {AdminToast} = useContext(AuthContext);

  const [formulario, setFormulario] = useState(formularioVacio);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    if(id_producto) {
      putProductoById(formulario).then(rpta => {
        if (rpta.request.status === 200) {
          AdminToast.fire({
            icon: 'success',
            title: 'Cambios guardados'
          });
          history.replace("/admin/producto");
        }
      })
    } else {
      postProducto(formulario).then((rpta) => {
        if (rpta.request.status === 201) {
          AdminToast.fire({
            icon: 'success',
            title: 'Producto creado'
          });
          history.replace("/admin/producto");
        }
      });
    }
  };

  const hangleReset = () => {
    setFormulario(formularioVacio);
  };

  const hangleCancel = () => {
    history.replace("/admin/producto");
  };

  useEffect(() => {
    if (id_producto) {
      getProductoById(id_producto).then((rpta) => {
        if (rpta.request.status === 200) {
          setFormulario(rpta.data);
        }
      });
    }
    getCategorias().then((rpta) => {
      if (rpta.request.status === 200) {
        setCategorias(rpta.data);
      }
    });
    getMarcas().then((rpta) => {
      if (rpta.request.status === 200) {
        setMarcas(rpta.data);
      }
    });
  }, []);

  return (

      <section className="section__crear">
        <form className="Crear__producto" onSubmit={hangleSubmit}>
          {id_producto ? (
            <div className="input__container2">
              <label htmlFor="">ID:</label>
              <input
                className="input_1"
                type="text"
                value={id_producto}
                disabled
              />
            </div>
          ) : null}
          <div className="input__container1">
            <label htmlFor="">Nombre del producto:</label>
            <input
              className="input_1"
              type="text"
              name="nombre"
              onChange={hangleChange}
              value={formulario.nombre}
            />
          </div>
          <div className="input__container1">
            <label htmlFor="">Descripción del producto:</label>
            <textarea
              className="input_1"
              type="text"
              name="descripcion"
              onChange={hangleChange}
              value={formulario.descripcion}
            />
          </div>

          <div className="row__input">
            <div className="input__container1">
              <label htmlFor="">Categoría del producto:</label>
              <select
                className="input_1"
                name="cat_id"
                onChange={hangleChange}
                value={formulario.cat_id}
              >
                <option value="0">Seleccione una categoria</option>
                {categorias.map((objCategoria, i) => {
                  return (
                    <option value={objCategoria.id} key={i}>
                      {objCategoria.nomb_categoria}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input__container1">
              <label htmlFor="">Marca del producto:</label>
              <select
                className="input_1"
                name="marca_id"
                onChange={hangleChange}
                value={formulario.marca_id}
              >
                <option value="0">Seleccione una marca</option>
                {marcas.map((objMarca, i) => {
                  return (
                    <option value={objMarca.id} key={i}>
                      {objMarca.nomb_marca}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row__input">
            <div className="input__container1">
              <label htmlFor="">Precio del producto:</label>
              <input
                className="input_1"
                type="number"
                name="precio"
                onChange={hangleChange}
                value={formulario.precio!==0 && formulario.precio}
                placeholder="0"
              />
            </div>

            <div className="input__container1">
              <label htmlFor="">Stock del producto:</label>
              <input
                className="input_1"
                type="number"
                name="stock"
                onChange={hangleChange}
                value={formulario.stock!==0 && formulario.stock}
                placeholder="0"
              />
            </div>
          </div>
          <div className="input__container2">
            <label htmlFor="">Porcentaje descuento:</label>
            <input
              className="input_1"
              type="number"
              name="porc_descuento"
              onChange={hangleChange}
              value={formulario.porc_descuento!==0 && formulario.porc_descuento}
              placeholder="0"
            />
          </div>
          <div className="input__container1">
            <label htmlFor="">Fotos del producto:</label>
            <input type="file" />
          </div>
          <div className="Btns__crear">
            <button className="btn__crear btn1" type="submit">
              <i className="fas fa-upload"></i> <p> {id_producto? "Guardar" : "Crear"} </p>
            </button>
            <button
              className="btn__crear btn2"
              type="button"
              onClick={hangleReset}
            >
              <i className="fas fa-chevron-left"></i> <p> Limpiar </p>
            </button>
            <button
              className="btn__crear btn3"
              type="button"
              onClick={hangleCancel}
            >
              <i className="fas fa-ban"></i> <p> Cancelar </p>
            </button>
          </div>
        </form>
      </section>

  );
};

export default AdminCrearProducto;
