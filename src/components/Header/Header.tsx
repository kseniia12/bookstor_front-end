import React from "react";
import logo from "../../img/logo-dark-theme.png";
import search from "../../img/search.png";
import { StylesWrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import constantForAxios from "../../constants/constants";

const Header = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    window.location.pathname === constantForAxios.SIGN_IN
      ? navigate(constantForAxios.SIGN_UP)
      : navigate(constantForAxios.SIGN_IN);
  };

  return (
    <StylesWrapper>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>Catalog</div>
      </div>
      <Input className="search-input" icon={search} placeholder="Search" />
      <Button
        text="Log In/ Sing Up"
        className="button"
        onClick={handleButtonClick}
      />
    </StylesWrapper>
  );
};

export default Header;
