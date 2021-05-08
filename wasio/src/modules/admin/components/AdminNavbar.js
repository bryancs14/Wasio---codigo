import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const AdminNavbar = () => {
  const refAside = useRef();

  const {cerrarSesion} = useContext(AuthContext);

  return (
    <aside className="admin__aside__bar" ref={refAside}>
      <div className="sidebar__profile">
        <button
          className="sidebar__menu open-mobile"
          onClick={() => {
            refAside.current.classList.toggle("open-mobile");
          }}
        >
          &#9776;
        </button>
      </div>
      <nav className="admin__sidebar__nav">
        <ul className="admin__sidebar__list">
          <li className="admin__sidebar__ite">
            <NavLink className="admin__sidebar__link" to="/admin">
              <i className="fas fa-desktop "></i>
              <p className="admin__sidebar__text">Dashboard</p>
            </NavLink>
          </li>
          <li className="admin__sidebar__ite">
            <NavLink className="admin__sidebar__link" to="/admin/producto">
              <i className="fas fa-th    "></i>
              <p className="admin__sidebar__text">Productos</p>
            </NavLink>
          </li>
          <li className="admin__sidebar__ite">
            <NavLink className="admin__sidebar__link" to="/admin/categoria">
              <i className="fas fa-plus    "></i>
              <p className="admin__sidebar__text">Categorias</p>
            </NavLink>
          </li>
          <li className="admin__sidebar__ite">
            <NavLink className="admin__sidebar__link" to="/admin/marca">
              <i className="fas fa-user-plus    "></i>
              <p className="admin__sidebar__text">Marcas</p>
            </NavLink>
          </li>
          <li className="admin__sidebar__ite">
            <NavLink className="admin__sidebar__link" to="/">
              <i className="fas fa-sliders-h    "></i>
              <p className="admin__sidebar__text">Ir al client</p>
            </NavLink>
          </li>
          <li className="admin__sidebar__ite">
            <div className="admin__sidebar__link" onClick={() => {
              cerrarSesion();
            }}>
              <i className="fas fa-desktop "></i>
              <p className="admin__sidebar__text">Cerrar Sesión</p>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;
