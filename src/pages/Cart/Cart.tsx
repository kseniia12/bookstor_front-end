import React from "react";
import { useAppSelector } from "../../hooks";
import { StylesWrapper } from "./style";
import BookFromCart from "../../components/BookFromCart/BookFromCart";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import constant from "../../lib/constants/constants";

const Cart = () => {
  const books = useAppSelector((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();

  const goToBookCatalog = () => {
    navigate(constant.CATALOG_BOOKS)
  }
  return (
    <StylesWrapper>
      {totalPrice !== 0 ? (
        <div>
          <div>
            {Object.keys(books).map((bookId, index) => {
              console.log(bookId, index, Object.keys(books).length)
              return (
                <>
                  <BookFromCart
                    books={books[bookId]}
                    key={bookId}
                    className={""}
                  />
                  {index !== Object.keys(books).length - 1 && (
                    <div className="dividing-line"></div>
                  )}
                </>
              );
            })}
          </div>
          <div className="result">
            <div className="result__totalPrice">
              Total: <p className="big-title">{totalPrice.toFixed(2)}</p>
            </div>
            <Button
              className="base-text result__continue-shopping"
              text="Continue shopping"
              onClick={goToBookCatalog}
            />
            <Button className="base-text result__сhekout" text="Chekout" />
          </div>
        </div>
      ) : (
        <EmptyCartComponent />
      )}
    </StylesWrapper>
  );
};

export default Cart;
