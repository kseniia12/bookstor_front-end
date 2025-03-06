import React from "react";
import logo from "../../assets/logo-dark-theme.png";
import search from "../../assets/search.png";
import { StylesWrapper } from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import constant from "../../lib/constants/constants";
import cart from "../../assets/Cart.png";
import userProfile from "../../assets/user_profile.png";
import heart from "../../assets/Heart.png";
import { useAppSelector, useConverterObjectToArray } from "../../hooks";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.users.user);

  const countBookWithCart = useConverterObjectToArray(
    (state) => state.cart.books
  );

  const countBookWithFavorites = useConverterObjectToArray(
    (state) => state.favorites.book
  );

  const handleButtonClick = () => {
    if (location.pathname !== constant.SIGN_IN) {
      return navigate(constant.SIGN_IN);
    }
    return navigate(constant.SIGN_UP);
  };

  return (
    <StylesWrapper src={{ cart, userProfile, heart }}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link className="logo__page" to="/">
          Catalog
        </Link>
      </div>
      <Input className="input" icon={search} placeholder="Search" type="text" />
      {user ? (
        <div className="menu">
          <div className="menu__cart">
            <div className="menu__cart-container">
              <div className="menu__count-heart">
                {countBookWithCart.length}
              </div>
              <Link to={constant.CART}>
                <Button className="menu__button cart" />
              </Link>
            </div>
          </div>
          <Link to={constant.HOME_PAGE}>
            <Button className="menu__button user" />
          </Link>
          <div className="menu__cart-favorites">
            <div className="menu__count-favorites">
              {countBookWithFavorites.length}
            </div>
            <Link to={constant.FAVORITES}>
              <Button className="menu__button heart" />
            </Link>
          </div>
        </div>
      ) : (
        <Button text="Log In/ Sing Up" onClick={handleButtonClick} />
      )}
    </StylesWrapper>
  );
};

export default Header;
