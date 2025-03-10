import React from "react";
import { StylesWrapper } from "./style";
import fairy from "../../assets/fairy.png";
import castle from "../../assets/castle.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import constant from "../../lib/constants/constants";

const AuthorizationBanner = () => {
  const navigate = useNavigate();

  const navigateToPageResistration = () => {
    navigate(constant.SIGN_IN);
  };

  return (
    <StylesWrapper>
      <img src={castle} alt="Castle" className="img__castle" />
      <div className="content">
        <div className="big-title">Authorize now</div>
        <div className="normal-title content__subtitle">
          Authorize now and discover the fabulous world of books
        </div>
        <Button text="Log In/ Sing Up" onClick={navigateToPageResistration} className="button"/>
      </div>
      <img src={fairy} alt="fairy" className="img__fairy" />
    </StylesWrapper>
  );
};

export default AuthorizationBanner;
