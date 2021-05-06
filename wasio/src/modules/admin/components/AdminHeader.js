import React from "react";

const AdminHeader = () => {
  return (
    <header className="admin__header">
      <div className="admin__header__main">
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
          <a href="#" className="lih link__Micuenta">
            <i className="fas fa-user"></i>
            <p className="text__header__link mc">Nombre de usuario</p>
          </a>
        </div>
      </div>
      <div className="patron__header"></div>
    </header>
  );
};

export default AdminHeader;
