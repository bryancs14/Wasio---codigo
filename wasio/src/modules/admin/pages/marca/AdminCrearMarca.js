import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMarcaById, postMarca } from "../../../../services/marcasService";
import AdminNavbar from "../../components/AdminNavbar";

const AdminCrearMarca = () => {
  const formularioVacio = {
    nomb_marca: "",
    descripcion: "",
    img_portada: "",
    img_logo: "",
  };

  const [formulario, setFormulario] = useState(formularioVacio);

  const history = useHistory();
  const { id_marca } = useParams();

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    postMarca(formulario).then((rpta) => {
      console.log(rpta);
    });
  };

  const hangleReset = () => {
    setFormulario(formularioVacio);
  };

  const hangleCancel = () => {
    history.replace("/admin/marca");
  };

  useEffect(() => {
    if (id_marca) {
      getMarcaById(id_marca).then((rpta) => {
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
          {id_marca ? (
            <div className="input__container2">
              <label htmlFor="">ID:</label>
              <input
                className="input_1"
                type="text"
                value={id_marca}
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
              value={formulario.nomb_marca}
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
          <div className="input__container1">
            <label htmlFor="">Foto de portada:</label>
            <input type="file" />
          </div>
          <div className="input__container1">
            <label htmlFor="">Logo de la marca:</label>
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

export default AdminCrearMarca;
