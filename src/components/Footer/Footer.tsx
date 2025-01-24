import React from "react";
import { StylesWrapper } from "./style";
import logo from "../../assets/logo-light-theme.png";
import map from "../../assets/map.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StylesWrapper>
      <div className="container">
        <div>
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="container__contact">
            <a href="mailto:tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</a>
            <a href="tel:4805550103">(480) 555-0103</a>
          </div>
        </div>
        <div className="container__item">
          <Link to="/home">Home Page</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/home">My Account</Link>
          <Link to="/home">Cart</Link>
        </div>
        <div>
          <div>6391 Elgin St. Celina, Delaware 10299</div>
          <div className="container__map">
            <img className="container__icon" src={map} alt="Map" />
          </div>
        </div>
      </div>
    </StylesWrapper>
  );
};

export default Footer;
