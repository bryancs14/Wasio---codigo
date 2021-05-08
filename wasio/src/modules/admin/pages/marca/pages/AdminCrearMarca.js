import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AdminContext from "../../../../../context/adminContext";
import { getMarcaById, postMarca, putMarcaById } from "../../../../../services/marcasService";

const formularioVacio = {
  nomb_marca: "",
  descripcion: "",
  img_portada: "",
  img_logo: "",
};

const AdminCrearMarca = () => {

  const [formulario, setFormulario] = useState(formularioVacio);

  const history = useHistory();
  const {AdminToast} = useContext(AdminContext);
  const { id_marca } = useParams();

  const hangleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    if(id_marca) {
      putMarcaById(formulario).then(rpta => {
        if (rpta.request.status === 200) {
          AdminToast.fire({
            icon: 'success',
            title: 'Cambios guardados'
          });
          history.replace("/admin/marca");
        }
      })
    } else {
      postMarca(formulario).then((rpta) => {
        if (rpta.request.status === 201) {
          AdminToast.fire({
            icon: 'success',
            title: 'Marca creada'
          });
          history.replace("/admin/marca");
        }
      });
    }
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
            <label htmlFor="">Nombre de la marca:</label>
            <input
              className="input_1"
              type="text"
              name="nomb_marca"
              onChange={hangleChange}
              value={formulario.nomb_marca}
            />
          </div>
          <div className="input__container1">
            <label htmlFor="">Descripción de la marca:</label>
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
              <i className="fas fa-upload"></i> <p> {id_marca? "Guardar" : "Crear"} </p>
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

export default AdminCrearMarca;
