import React from "react";
import logo from "../../img/logo-dark-theme.png";
import search from "../../img/search.png";
import { StylesWrapper } from "./style";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
const Header = () => {
  return (
    <StylesWrapper>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>Catalog</div>
      </div>
      <CustomInput icon={search} placeholder="Search" width={413} />
      <CustomButton text="Log In/ Sing Up" />
    </StylesWrapper>
  );
};

export default Header;
