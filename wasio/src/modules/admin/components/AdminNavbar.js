import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <aside className="admin__aside__bar">
      <div className="sidebar__profile">
        <button className="sidebar__menu open-mobile">&#9776;</button>
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
            <NavLink className="admin__sidebar__link" to="/admin/settings">
              <i className="fas fa-sliders-h    "></i>
              <p className="admin__sidebar__text">Ajustes</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;
