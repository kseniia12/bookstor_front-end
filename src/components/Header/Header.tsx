import React from "react";
import logo from "../../img/logo-dark-theme.png";
import search from "../../img/search.png";
import { Logo, StylesWrapper } from "./style";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
const Header = () => {
  return (
    <StylesWrapper>
      <div className="logo">
        <Logo src={logo} alt="Logo" />
        <div>Catalog</div>
      </div>
      <div className="search">
      <CustomInput icon={search} placeholder="Search"  />
      </div>
      <CustomButton text="Log In/ Sing Up" />
    </StylesWrapper>
  );
};

export default Header;
