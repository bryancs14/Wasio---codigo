import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getCategorias, deleteCategoriaById } from '../../../../services/categoriasService'
import AdminNavbar from '../../components/AdminNavbar';

const AdminCategoriaPage = () => {

  let borrados = false;
  let borrado = false;

  const [categorias, setCategorias] = useState([]);

  const {id_categoria} = useParams();
  const history = useHistory();

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
      console.log("Todos los productos fueron borrados");
    } else {
      console.log("No se pudo borrar todos los productos");
    }
    traerCategorias();
  }

  const deleteCategoria = (id_categoria) => {
    deleteCategoriaById(id_categoria).then(rpta => {
      if(rpta.request.status === 200){
        borrado = true;
      } else {
        borrado = false;
      }
    })
    traerCategorias();
  }

  return (
    <main className="admin__main">
      <AdminNavbar />
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
    </main>
  )
}

export default AdminCategoriaPage
