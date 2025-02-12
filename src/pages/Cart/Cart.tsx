import React from "react";
import { useAppSelector } from "../../hooks";
import { StylesWrapper } from "./style";
import BookFromCart from "../../components/BookFromCart/BookFromCart";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";

const Cart = () => {
  const books = useAppSelector((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  return (
    <StylesWrapper>
      {totalPrice !== 0 ? (
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
        <EmptyCartComponent />
      )}
    </StylesWrapper>
  );
};

export default Cart;
