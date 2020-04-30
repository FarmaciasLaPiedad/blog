import React from "react";

import "./styles/Services.css";

class Services extends React.Component {
  render() {
    return (
      <div className="service">
        <div className="service__section-title">
          <img
            className="service__avatar"
            src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            alt="Avatar"
          ></img>
          <h1>¿Quiénes somos?</h1>
        </div>
        <div className="service__section-info">
          <h3>Conoce nuetra historia</h3>
          <div>@Ver más</div>
        </div>

        <div className="service__footer">#NoSalgaDeCasa</div>
      </div>
    );
  }
}

export default Services;
