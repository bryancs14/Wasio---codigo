import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteProductoById, getProductos } from "../../../../services/productosService";
import AdminNavbar from "../../components/AdminNavbar";
import "./../../../../styles/Productos.css";

const AdminProductoPage = () => {
  const [productos, setProductos] = useState([]);

  let borrados = false;
  let borrado = false;

  const traerProductos = () => {
    getProductos().then((rpta) => {
      if (rpta.request.status === 200) {
        setProductos(rpta.data);
      }
    });
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const deleteAll = () => {
    productos.forEach((objProducto => {
      deleteProductoById(objProducto.id).then(rpta => {
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
    traerProductos();
  }

  const deleteProducto = (id_producto) => {
    deleteProductoById(id_producto).then(rpta => {
      if(rpta.request.status === 200){
        borrado = true;
      } else {
        borrado = false;
      }
    })
    traerProductos();
  }

  const history = useHistory();
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
                history.push("/admin/producto/crear");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
            <button
              className="btn_admin_lp btnlp2"
              onClick={() => {
                traerProductos();
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
                <th>Producto</th>
                <th>Categoria</th>
                <th>Marca</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>% Descuento</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                productos.map((objProducto, i) => {
                  return (
                    <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{objProducto.id}</td>
                <td>{objProducto.nombre}</td>
                <td>{objProducto.cat_id || "Sin categoria"}</td>
                <td>{objProducto.marca_id || "Sin marca"}</td>
                <td>{objProducto.stock}</td>
                <td>{objProducto.precio}</td>
                <td>{objProducto.porc_descuento}</td>
                <td>
                  <button type="button" onClick={() => {
                    history.push("/admin/producto/editar/"+objProducto.id)
                  }}>
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => {
                    deleteProducto(objProducto.id);
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
  );
};
export default AdminProductoPage;
