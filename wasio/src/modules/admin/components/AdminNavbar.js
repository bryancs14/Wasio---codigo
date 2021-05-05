import React from "react";

const AdminNavbar = () => {
  return (
    <aside class="aside__bar ">
      <div class="sidebar__profile">
        <button class="sidebar__menu open-mobile">&#9776</button>
      </div>
      <nav class="sidebar__nav">
        <ul class="sidebar__list">
          <li class="sidebar__ite">
            <a class="sidebar__link" href="">
              <i class="fas fa-desktop "></i>
              <p class="sidebar__text"> Registro de ventas </p>
            </a>
          </li>
          <li class="sidebar__ite">
            <a class="sidebar__link" href="">
              <i class="fas fa-th    "></i>
              <p class="sidebar__text"> Productos </p>
            </a>
          </li>
          <li class="sidebar__ite">
            <a class="sidebar__link" href="">
              <i class="fas fa-plus    "></i>
              <p class="sidebar__text"> Crear producto </p>
            </a>
          </li>
          <li class="sidebar__ite">
            <a class="sidebar__link" href="">
              <i class="fas fa-user-plus    "></i>
              <p class="sidebar__text">Crear marca </p>
            </a>
          </li>
          <li class="sidebar__ite">
            <a class="sidebar__link" href="">
              <i class="fas fa-sliders-h    "></i>
              <p class="sidebar__text"> Ajustes </p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;
