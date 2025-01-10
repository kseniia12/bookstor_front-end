import React from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgMan from "../../img/man-with-book.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { StylesWrapper } from "./style";

const Login = () => {
  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Sign In</h1>
        <form>
          <div className="item">
            <Input className="item__input" icon={emailIcon} placeholder="Email" />
            <div>Enter your email</div>
          </div>
          <div className="item">
            <Input className="item__input" icon={searchIcon} placeholder="Password" />
            <div>Enter your password</div>
          </div>
          <Button className="button" text="Log In" />
        </form>
      </div>
      <div className="search">
        <img src={imgMan} alt="Logo" className="search_icon" />
      </div>
    </StylesWrapper>
  );
};

export default Login;
