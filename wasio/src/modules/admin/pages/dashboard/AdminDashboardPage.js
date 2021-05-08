import React, { useEffect, useState } from "react";
import { getMarcas } from "../../../../services/marcasService";
import { getProductos } from "../../../../services/productosService";
import AdminNavbar from "../../components/AdminNavbar";

const AdminDashboardPage = () => {

  const [dash, setDash] = useState({
    cant_marcas: 0,
    cant_productos: 0
  });

  useEffect(() => {
    getProductos().then(rpta1 => {
      if(rpta1.request.status === 200) {
        getMarcas().then(rpta2 => {
          if(rpta2.request.status === 200) {
            setDash({
              cant_productos: rpta1.data.length,
              cant_marcas: rpta2.data.length
            })
          }
        })
        console.log(dash);
      }
    })
    
  }, [])

  return (

      <div className="alldash">
        <div className="dash__wrapper">
          <div className="dd1">
            <div className="div_dash">
              <p> Por entregar </p>
              <div className="div_dash_fas">
                <p> 0 </p>
                <div className="fasdash">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>
            </div>
            <div className="div_dash">
              <p> Entregados </p>
              <div className="div_dash_fas">
                <p> 0 </p>
                <div className="fasdash">
                  <i className="fas fa-arrow-up"></i>
                </div>
              </div>
            </div>
            <div className="div_dash">
              <p> Total de pedidos </p>
              <div className="div_dash_fas">
                <p> 0 </p>
                <div className="fasdash">
                  <i className="fas fa-equals"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="dd2">
            <div className="div_dash">
              <p> Usuarios </p>
              <div className="div_dash_fas">
                <p> 1 </p>
                <div className="fasdash">
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>
            <div className="div_dash">
              <p> Marcas registradas </p>
              <div className="div_dash_fas">
                <p> {dash.cant_marcas} </p>
                <div className="fasdash">
                  <i className="fas fa-shopping-bag"></i>
                </div>
              </div>
            </div>
            <div className="div_dash">
              <p> Productos </p>
              <div className="div_dash_fas">
                <p> {dash.cant_productos} </p>
                <div className="fasdash">
                  <i className="fas fa-th"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dash__wrapper2">
          <div className="dashpatron"></div>
          <div className="div_dash dashtotal">
            <p> Total ingresos </p>
            <div className="div_dash_fas ddf3">
              <p> S/. 0.00 </p>
              <div className="fasdashtotal">
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>
          </div>
          <div className="dashpatron"></div>
        </div>
      </div>

  );
};

export default AdminDashboardPage;
