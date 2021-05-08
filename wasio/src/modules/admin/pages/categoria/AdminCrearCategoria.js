import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getCategoriaById, postCategoria, putCategoriaById, putMarcaById } from '../../../../services/categoriasServices';
import AdminNavbar from '../../components/AdminNavbar'

const AdminCrearCategoria = () => {

  const formularioVacio = {
    nomb_categoria: ""
  }

  const [formulario, setFormulario] = useState(formularioVacio);

  const {id_categoria} = useParams();

  const history = useHistory();

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    if(id_categoria) {
      putCategoriaById(formulario).then(rpta => {
        if (rpta.request.status === 200) {
          console.log("Cambios guardados");
        }
      })
    } else {
      postCategoria(formulario).then((rpta) => {
        if (rpta.request.status === 200) {
          console.log("Marca guardada");
        }
      });
    }
  };

  const hangleReset = () => {
    setFormulario(formularioVacio);
  };

  const hangleCancel = () => {
    history.replace("/admin/categoria");
  };

  useEffect(() => {
    if (id_categoria) {
      getCategoriaById(id_categoria).then((rpta) => {
        if (rpta.request.status === 200) {
          setFormulario(rpta.data);
        }
      });
    }
  }, [])

  return (
    <main className="admin__main">
      <AdminNavbar />
      <section className="section__crear">
        <form className="Crear__producto" onSubmit={hangleSubmit}>
          {id_categoria ? (
            <div className="input__container2">
              <label htmlFor="">ID:</label>
              <input
                className="input_1"
                type="text"
                value={id_categoria}
                disabled
              />
            </div>
          ) : null}
          <div className="input__container1">
            <label htmlFor="">Nombre:</label>
            <input
              className="input_1"
              type="text"
              name="nomb_marca"
              onChange={hangleChange}
              value={formulario.nomb_categoria}
            />
          </div>
          <div className="Btns__crear">
            <button className="btn__crear btn1" type="submit">
              <i className="fas fa-upload"></i> <p> {id_categoria? "Guardar" : "Crear"} </p>
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
  )
}

export default AdminCrearCategoria
