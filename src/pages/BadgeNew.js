import React from "react";
import Navbar from "../components/Navbar";
import Servicios from "../components/Services";
import "./styles/BadgesNew.css";

import header from "../images/badge-header.svg";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Servicios />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
