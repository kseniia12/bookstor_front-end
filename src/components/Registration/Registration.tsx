import React, { useState } from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgMan from "../../img/man-with-book.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { StylesWrapper } from "../Login/style";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();
 
  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Sign Up</h1>
        <form>
          <div className="item">
            <Input
              className="item__input"
              icon={emailIcon}
              placeholder="Email"
            />
            <div>Enter your email</div>
          </div>
          <div className="item">
            <Input
              className="item__input"
              icon={searchIcon}
              placeholder="Password"
            />
            <div>Enter your password</div>
          </div>
          <div className="item">
            <Input
              className="item__input"
              icon={searchIcon}
              placeholder="Password replay"
            />
            <div>Repeat your password without errors</div>
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

export default Registration;
