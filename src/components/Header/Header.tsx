import React from "react";
import logo from "../../img/logo-dark-theme.png";
import search from "../../img/search.png";
import { StylesWrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import constantForAxios from "../../constants/constants";
import cart from "../../img/Cart.png";
import userProfile from "../../img/user_profile.png";
import heart from "../../img/Heart.png";
import { useAppSelector } from "../../hooks";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.users.user.email);

  const handleButtonClick = () => {
    window.location.pathname === constantForAxios.SIGN_IN
      ? navigate(constantForAxios.SIGN_UP)
      : navigate(constantForAxios.SIGN_IN);
  };

  return (
    <StylesWrapper src={{ cart, userProfile, heart }}>
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
        <div>Catalog</div>
      </div>
      <Input className="input" icon={search} placeholder="Search" type="text" />
      {user ? (
        <div className="menu">
          <div className="menu__cart">
            <div className="menu__count">1</div>
            <Link to="/home">
              <Button className="menu__button cart" />
            </Link>
          </div>
          <Link to="/home">
            <Button className="menu__button user" />
          </Link>
          <Link to="/home">
            <Button className="menu__button heart" />
          </Link>
        </div>
      ) : (
        <Button text="Log In/ Sing Up" onClick={handleButtonClick} />
      )}
    </StylesWrapper>
  );
};

export default Header;
