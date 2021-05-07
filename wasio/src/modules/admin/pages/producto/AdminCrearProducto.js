import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCategorias } from "../../../../services/categoriasServices";
import { getMarcas } from "../../../../services/marcasService";
import {
  getProductoById,
  postProducto,
} from "../../../../services/productosService";
import AdminNavbar from "../../components/AdminNavbar";

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
    postProducto(formulario).then((rpta) => {
      console.log(rpta);
    });
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
    <main className="admin__main">
      <AdminNavbar />
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
            <label htmlFor="">Nombre:</label>
            <input
              className="input_1"
              type="text"
              name="nombre"
              onChange={hangleChange}
              value={formulario.nombre}
            />
          </div>
          <div className="input__container1">
            <label htmlFor="">Descripción:</label>
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
              <label htmlFor="">Categoría:</label>
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
              <label htmlFor="">Marca:</label>
              <select
                className="input_1"
                name="marca_id"
                onChange={hangleChange}
                value={formulario.marca_id}
              >
                <option value="0">Seleccione una categoria</option>
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
              <label htmlFor="">Precio:</label>
              <input
                className="input_1"
                type="number"
                name="precio"
                onChange={hangleChange}
                value={formulario.precio}
              />
            </div>

            <div className="input__container1">
              <label htmlFor="">Stock:</label>
              <input
                className="input_1"
                type="number"
                name="stock"
                onChange={hangleChange}
                value={formulario.stock}
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
              value={formulario.porc_descuento}
            />
          </div>
          <div className="input__container1">
            <label htmlFor="">Fotos del producto:</label>
            <input type="file" />
          </div>
          <div className="Btns__crear">
            <button className="btn__crear btn1" type="submit">
              <i className="fas fa-upload"></i> <p> Crear </p>
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
    </main>
  );
};

export default AdminCrearProducto;
