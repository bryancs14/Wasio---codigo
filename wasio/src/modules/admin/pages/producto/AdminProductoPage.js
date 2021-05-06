import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./../../../../styles/Productos.css"

const AdminProductoPage = () => {
  return (
    <main className="admin__main">
      <AdminNavbar />
      <section class="section__listaproductos">
        <div class="primeraparte__lp">
          <h1 class="title__listaproductos">Productos</h1>
          <div class="btn__admin__listaproductos">
            <button class="btn_admin_lp btnlp1">
              <i class="fas fa-plus    "></i>
            </button>
            <button class="btn_admin_lp btnlp2">
              <i class="fas fa-sync    "></i>
            </button>
            <button class="btn_admin_lp btnlp3">
              <i class="fas fa-trash    "></i>
            </button>
          </div>
        </div>
        <div class="div_sec_listaproductos">
          <div class="sec_subtitlefaslist">
            <i class="fas fa-list    "></i>
            <h2 class="subtitile__listaprod">Lista de productos</h2>
          </div>
          <table class="section__tableproductos">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Nombre del producto</td>
              <td>Mujer</td>
              <td>4</td>
              <td>
                <button>
                  <i class="fas fa-edit    "></i>
                </button>
              </td>
              <td>
                <button>
                  <i class="fas fa-trash   "></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Nombre del producto</td>
              <td>Hombre</td>
              <td>2</td>
              <td>
                <button>
                  <i class="fas fa-edit    "></i>
                </button>
              </td>
              <td>
                <button>
                  <i class="fas fa-trash    "></i>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
};
export default AdminProductoPage;
