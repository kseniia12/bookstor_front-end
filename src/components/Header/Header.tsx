import React from "react";
import logo from "../../assets/logo-dark-theme.png";
import search from "../../assets/search.png";
import { StylesWrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import constant from "../../constants/constants";
import cart from "../../assets/Cart.png";
import userProfile from "../../assets/user_profile.png";
import heart from "../../assets/Heart.png";
import { useAppSelector } from "../../hooks";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.users.user);
  const countBookWithCart = useAppSelector((state) => state.cart.book);
  const handleButtonClick = () => {
    window.location.pathname === constant.SIGN_IN
      ? navigate(constant.SIGN_UP)
      : navigate(constant.SIGN_IN);
  };

  return (
    <StylesWrapper src={{ cart, userProfile, heart }}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link className="logo__page" to="/">Catalog</Link>
      </div>
      <Input className="input" icon={search} placeholder="Search" type="text" />
      {user.id !== 0 ? (
        <div className="menu">
          <div className="menu__cart">
            <div className="menu__count">
              {Object.keys(countBookWithCart).length}
            </div>
            <Link to={constant.CART}>
              <Button className="menu__button cart" />
            </Link>
          </div>
          <Link to={constant.HOME_PAGE}>
            <Button className="menu__button user" />
          </Link>
          <Link to={constant.FAVORITES}>
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
