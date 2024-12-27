import React from "react";
import logo from "../../img/logo.png";
import { Logo, StylesWrapper } from "./style";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
const Header = () => {
  return (
    <StylesWrapper>
      <Logo src={logo} alt="Logo" />
      <CustomInput placeholder={"Search"}/>
      <CustomButton text={"Log In/ Sing Up"} />
    </StylesWrapper>
  );
};

export default Header;
