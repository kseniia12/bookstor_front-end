import React from "react";
import logo from "../../img/logo-dark-theme.png";
import search from "../../img/search.png";
import { StylesWrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Header = () => {
  return (
    <StylesWrapper>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>Catalog</div>
      </div>
      <Input className="search-input" icon={search} placeholder="Search" />
      <Button text="Log In/ Sing Up" className="button" />
    </StylesWrapper>
  );
};

export default Header;
