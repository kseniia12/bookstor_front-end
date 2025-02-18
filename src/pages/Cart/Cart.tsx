import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { StylesWrapper } from "./style";
import BookFromCart from "../../components/BookFromCart/BookFromCart";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import constant from "../../lib/constants/constants";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import {
  deleteBookToCartThunk,
  getBookToCartThunk,
} from "../../store/thunk/thunkCart";

const Cart = () => {
  const books = useAppSelector((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  console.log(Object.keys(books));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const goToBookCatalog = () => {
    navigate(constant.CATALOG_BOOKS);
  };

  const proceedToCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    Object.keys(books).map((bookId) => {
      return dispatch(deleteBookToCartThunk({ id: Number(bookId) }));
    });

    dispatch(getBookToCartThunk());
  };

  return (
    <StylesWrapper>
      {isModalOpen && <CheckoutModal onClose={closeModal} />}
      {totalPrice !== 0 ? (
        <div>
          <div>
            {Object.keys(books).map((bookId, index) => {
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
            <Button
              className="base-text result__сhekout"
              text="Chekout"
              onClick={proceedToCheckout}
            />
          </div>
        </div>
      ) : (
        <EmptyCartComponent />
      )}
    </StylesWrapper>
  );
};

export default Cart;
