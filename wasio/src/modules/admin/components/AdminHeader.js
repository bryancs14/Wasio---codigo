import React from "react";

const AdminHeader = () => {
  return (
    <header className="header">
      <div className="header__wrapper seccion1">
        <div className="header__main">
          <div className="header__logo">
            <figure className="figure__logo">
              <img
                className="imagen__logo"
                src="https://aws-samishop-recursos.s3.us-east-1.amazonaws.com/00000D3E/es-PE/images/logo/Logotipo.png"
                alt=""
              />
            </figure>
          </div>
          <div className="header__links">
            <li>
              <a href="#" className="lih link__Micuenta">
                <button className="fas fa-user"></button>
                <p className="text__header__link mc">Nombre de usuario</p>
              </a>
            </li>
          </div>
        </div>
        <div className="patron__header"></div>
      </div>
      <div className="header__wrapper seccion2"></div>
    </header>
  );
};

export default AdminHeader;
