import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { deleteMarcaById, getMarcas } from '../../../../services/marcasService';
import AdminNavbar from '../../components/AdminNavbar'

const AdminMarcaPage = () => {

  const history = useHistory();
  const [marcas, setMarcas] = useState([]);

  let borrados = false;
  let borrado = false;

  const traerMarcas = () => {
    getMarcas().then(rpta => {
      if(rpta.request.status === 200) {
        setMarcas(rpta.data);
      }
    });
  }

  useEffect(() => {
    traerMarcas();
  }, [])

  const deleteAll = () => {
    marcas.forEach((objMarca => {
      deleteMarcaById(objMarca.id).then(rpta => {
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
    traerMarcas();
  }

  const deleteMarca = (id_marca) => {
    deleteMarcaById(id_marca).then(rpta => {
      if(rpta.request.status === 200){
        borrado = true;
      } else {
        borrado = false;
      }
    })
    traerMarcas();
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
                history.push("/admin/marca/crear");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
            <button
              className="btn_admin_lp btnlp2"
              onClick={() => {
                traerMarcas();
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
                <th>Logo</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                marcas.map((objMarca, i) => {
                  return (
                    <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{objMarca.id}</td>
                <td>{objMarca.nomb_marca}</td>
                <td><img className="admin__marca__logo" src={objMarca.img_logo} alt="" /></td>
                <td>
                  <button type="button" onClick={() => {
                    history.push("/admin/marca/editar/"+objMarca.id)
                  }}>
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => {
                    deleteMarca(objMarca.id);
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

export default AdminMarcaPage
