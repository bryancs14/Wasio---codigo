import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../../services/categoriasServices";
import { getMarcas } from "../../../../services/marcasService";
import { postProducto } from "../../../../services/productosService";
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
    detalle: {talla: "aaa"},
    imagen: ""
  };

  const [formulario, setFormulario] = useState(formularioVacio);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    console.log(formulario);
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    postProducto(formulario).then(rpta => {
      console.log(rpta);
    })
  }

  const hangleReset = () => {
    setFormulario(formularioVacio);
  }

  const hangleCancel = () => {

  }

  useEffect(() => {
      getCategorias().then(rpta => {
        if(rpta.request.status === 200){
            setCategorias(rpta.data);
        }
      })
      getMarcas().then(rpta => {
        if(rpta.request.status === 200){
            setMarcas(rpta.data);
        }
      })
  }, [])

  return (
    <main className="admin__main">
      <AdminNavbar />
      <section className="section__crear">
        <form className="Crear__producto" onSubmit={hangleSubmit}>
          <div className="input1">
            <label htmlFor="">Nombre:</label>
            <input
              type="text"
              name="nombre"
              onChange={hangleChange}
              value={formulario.nombre}
            />
          </div>
          <div className="input2">
            <label htmlFor="">Descripción:</label>
            <input
              type="text"
              name="descripcion"
              onChange={hangleChange}
              value={formulario.descripcion}
            />
          </div>
          <div className="papa">
            <div className="input3">
              <div className="div__input4">
                <label htmlFor="">Categoría:</label>
                <select className="selector" name="cat_id" onChange={hangleChange} value={formulario.cat_id}>
                    <option value="0">Seleccione una categoria</option>
                  {
                      categorias.map((objCategoria, i) => {
                          return <option value={objCategoria.id} key={i}>{objCategoria.nomb_categoria}</option>
                      })
                  }
                </select>
              </div>
              <div className="div__input4">
                <label htmlFor="">Codigo:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={hangleChange}
                  value={formulario.nombre}
                />
              </div>
              <div className="div__input4">
                <label htmlFor="">Precio:</label>
                <input
                  type="number"
                  name="precio"
                  onChange={hangleChange}
                  value={formulario.precio}
                />
              </div>
            </div>
            <div className="input4">
              <div className="div__input4">
                <label htmlFor="">Marca:</label>
                <select className="selector" name="marca_id" onChange={hangleChange} value={formulario.marca_id}>
                    <option value="0">Seleccione una categoria</option>
                  {
                      marcas.map((objMarca, i) => {
                          return <option value={objMarca.id} key={i}>{objMarca.nomb_marca}</option>
                      })
                  }
                </select>
              </div>
              <div className="div__input4">
                <label htmlFor="">Stock:</label>
                <input
                  type="number"
                  name="stock"
                  onChange={hangleChange}
                  value={formulario.stock}
                />
              </div>
              <div className="div__input4">
                <label htmlFor="">Porcentaje descuento:</label>
                <input
                  type="number"
                  name="porc_descuento"
                  onChange={hangleChange}
                  value={formulario.porc_descuento}
                />
              </div>
            </div>
          </div>
          <div className="input5">
            <label htmlFor="">Fotos del producto:</label> <br />
            <input type="file" />
          </div>
        <div className="Btns__crear">
          <button className="btn__crear btn1" type="submit">
            <i className="fas fa-upload"></i> <p> Crear </p>
          </button>
          <button className="btn__crear btn2" type="button" onClick={hangleReset}>
            <i className="fas fa-chevron-left"></i> <p> Limpiar </p>
          </button>
          <button className="btn__crear btn3" type="button" onClick={hangleCancel}>
            <i className="fas fa-ban"></i> <p> Cancelar </p>
          </button>
        </div>
        </form>
      </section>
    </main>
  );
};

export default AdminCrearProducto;