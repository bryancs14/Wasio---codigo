import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import AdminContext from '../../../../../context/adminContext';
import { getCategorias, deleteCategoriaById } from '../../../../../services/categoriasService'

const AdminCategoriaPage = () => {

  let borrados = false;

  const [categorias, setCategorias] = useState([]);

  const history = useHistory();

  const {AdminToast} = useContext(AdminContext);

  const traerCategorias = () => {
    getCategorias().then(rpta => {
      if(rpta.request.status === 200) {
        setCategorias(rpta.data);
      }
    })
  }

  useEffect(() => {
    traerCategorias();
  }, [])

  const deleteAll = () => {
    categorias.forEach((objCategoria => {
      deleteCategoriaById(objCategoria.id).then(rpta => {
        if(rpta.request.status === 200){
          borrados = true;
        } else {
          borrados = false;
        }
      })
    }))
    if(borrados) {
      AdminToast.fire({
        icon: 'success',
        title: 'Todas las categorias fueron eliminadas'
      });
      traerCategorias();
    } else {
      AdminToast.fire({
        icon: 'danger',
        title: 'No se pudieron eliminar todas las categorias'
      });
      traerCategorias();
    }
  }

  const deleteCategoria = (id_categoria) => {
    deleteCategoriaById(id_categoria).then(rpta => {
      console.log(rpta);
      if(rpta.request.status === 200){
        AdminToast.fire({
          icon: 'success',
          title: 'Categoria eliminada'
        });
        traerCategorias();
      } else {
        AdminToast.fire({
          icon: 'danger',
          title: 'No se pudo eliminar la categoria'
        });
      }
    })
  }

  return (
    
      <section className="section__listaproductos">
        <div className="primeraparte__lp">
          <h1 className="title__listaproductos">Productos</h1>
          <div className="btn__admin__listaproductos">
            <button
              className="btn_admin_lp btnlp1"
              onClick={() => {
                history.push("/admin/categoria/crear");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
            <button
              className="btn_admin_lp btnlp2"
              onClick={() => {
                traerCategorias();
              }}
            >
              <i className="fas fa-sync"></i>
            </button>
            <button className="btn_admin_lp btnlp3" onClick={() => {
              deleteAll();
            }}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="div_sec_listaproductos">
          <div className="sec_subtitlefaslist">
            <i className="fas fa-list"></i>
            <h2 className="subtitile__listaprod">Lista de productos</h2>
          </div>
          <table className="section__tableproductos">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Id</th>
                <th>Marca</th>
                <th>Imagen</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                categorias.map((objCategoria, i) => {
                  return (
                    <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{objCategoria.id}</td>
                <td>{objCategoria.nomb_categoria}</td>
                <td><img src={objCategoria.img_categoria} alt="" /></td>
                <td>
                  <button type="button" onClick={() => {
                    history.push("/admin/categoria/editar/"+objCategoria.id)
                  }}>
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => {
                    deleteCategoria(objCategoria.id);
                  }}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </section>

  )
}

export default AdminCategoriaPage
