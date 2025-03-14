import React from "react";
import Button from "../Button/Button";
import constant from "../../lib/constants/constants";
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
      <img src={book} alt="Book" className="image" />
      <div className="message">
        <div className="big-title">Your cart is empty</div>
        <div className="description">
          Add items to cart to make a purchase. Go to the catalogue no.
        </div>
        <Button text="Go to catalog" className="button" onClick={handleGoToCatalog} />
      </div>
    </StylesWrapper>
  );
};

export default EmptyCartComponent;
