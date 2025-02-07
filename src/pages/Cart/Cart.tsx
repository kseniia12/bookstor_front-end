import React from "react";
import { useAppSelector } from "../../hooks";
import { StylesWrapper } from "./style";
import BookFromCart from "../../components/BookFromCart/BookFromCart";
import book from "../../assets/bookFromCart.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import constant from "../../constants/constants";
const Cart = () => {
  const books = useAppSelector((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate(constant.CATALOG_BOOKS);
  };

  return (
    <StylesWrapper>
      {Object.keys(books).length !== 0 ? (
        <div>
          <div className="books">
            {Object.keys(books).map((bookId) => {
              return (
                <BookFromCart
                  books={books[bookId]}
                  key={bookId}
                  className={""}
                />
              );
            })}
          </div>
          <div className="totalPrice">Total: {totalPrice.toFixed(2)}</div>
        </div>
      ) : (
        <div className="cart-empty">
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
        </div>
      )}
    </StylesWrapper>
  );
};

export default Cart;
