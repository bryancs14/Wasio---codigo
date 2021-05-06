import React from "react";

const AdminNavbar = () => {
  return (
    <aside className="admin__aside__bar">
      <div className="sidebar__profile">
        <button className="sidebar__menu open-mobile">&#9776;</button>
      </div>
      <nav className="sidebar__nav">
        <ul className="admin__sidebar__list">
          <li className="admin__sidebar__ite">
            <a className="admin__sidebar__link" href="">
              <i className="fas fa-desktop "></i>
              <p className="admin__sidebar__text"> Registro de ventas </p>
            </a>
          </li>
          <li className="admin__sidebar__ite">
            <a className="admin__sidebar__link" href="">
              <i className="fas fa-th    "></i>
              <p className="admin__sidebar__text"> Productos </p>
            </a>
          </li>
          <li className="admin__sidebar__ite">
            <a className="admin__sidebar__link" href="">
              <i className="fas fa-plus    "></i>
              <p className="admin__sidebar__text"> Crear producto </p>
            </a>
          </li>
          <li className="admin__sidebar__ite">
            <a className="admin__sidebar__link" href="">
              <i className="fas fa-user-plus    "></i>
              <p className="admin__sidebar__text">Crear marca </p>
            </a>
          </li>
          <li className="admin__sidebar__ite">
            <a className="admin__sidebar__link" href="">
              <i className="fas fa-sliders-h    "></i>
              <p className="admin__sidebar__text"> Ajustes </p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;
