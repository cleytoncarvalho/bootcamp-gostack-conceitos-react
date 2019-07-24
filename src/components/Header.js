import React from "react";

import logo from "../assets/logo.png";
import iconUser from "../assets/icon-user.png";

function Header() {
  return (
    <header id="header-main">
      <div className="container">
        <img src={logo} alt="Facebook logo" className="logo" />

        <a href="javascript:;" className="profile-link">
          Meu perfil
          <img src={iconUser} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
