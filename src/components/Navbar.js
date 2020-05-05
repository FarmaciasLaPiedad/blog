import React from "react";

import "./styles/Navbar.css";
import logo from "../images/LogoPiedadFondo.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="">
          <a href="/">
            <img className="Navbar__logo" src={logo} alt="Logo piedad" />
            <span className="font-weight-light">Donde tu salud, es primero...</span>
          </a>
        </div>
        <nav className="menu">
          <ol>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Servicio a domicilio</a>
            </li>
            <li>
              <a href="/">Farmacias</a>
            </li>
            <li>
              <a href="/">Bolsa de trabajo</a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Navbar;
