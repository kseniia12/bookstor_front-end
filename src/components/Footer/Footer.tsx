import React from "react";
import { StylesWrapper } from "./style";
import logo from "../../img/logo-light-theme.png";
import map from "../../img/map.png";

const Footer = () => {
  return (
    <StylesWrapper>
      <div>
        <img src={logo} alt="Logo" />
        <div className="contact">
          <div>tranthuy.nute@gmail.com</div>
          <div>(480) 555-0103</div>
        </div>
      </div>
      <ol className="item">
        <li>Home Page</li>
        <li>Catalog</li>
        <li>My Account</li>
        <li>Cart</li>
      </ol>
      <div>
        <div>6391 Elgin St. Celina, Delaware 10299</div>
        <img className="map" src={map} alt="Map" />
      </div>
    </StylesWrapper>
  );
};

export default Footer;
