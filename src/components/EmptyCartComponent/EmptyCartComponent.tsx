import React from "react";
import Button from "../Button/Button";
import constant from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import book from "../../assets/bookFromCart.png";
import { StylesWrapper } from "./style";
const EmptyCartComponent = () => {
  const navigate = useNavigate();
  const handleGoToCatalog = () => {
    navigate(constant.CATALOG_BOOKS);
  };
  return (
    <StylesWrapper>
      <div className="cart-empty__image">
        <img src={book} alt="Book" className="cart-empty__book" />
      </div>
      <div className="cart-empty__message">
        <div className="cart-empty__title">Your cart is empty</div>
        <div className="cart-empty__description">
          Add items to cart to make a purchase. Go to the catalogue no.
        </div>
        <Button text="Go to catalog" onClick={handleGoToCatalog} />
      </div>
    </StylesWrapper>
  );
};

export default EmptyCartComponent;
