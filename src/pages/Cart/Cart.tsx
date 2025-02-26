import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useConverterObjectToArray,
} from "../../hooks";
import { StylesWrapper } from "./style";
import BookFromCart from "../../components/BookFromCart/BookFromCart";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import constant from "../../lib/constants/constants";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { deleteBookToCartThunk } from "../../store/cart/thunkCart";

const Cart = () => {
  const books = useConverterObjectToArray((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const bookIds = books.map((book) => book.id);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const goToBookCatalog = () => {
    navigate(constant.CATALOG_BOOKS);
  };

  const proceedToCheckout = async () => {
    await dispatch(deleteBookToCartThunk({ id: bookIds }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StylesWrapper>
      {isModalOpen && <CheckoutModal onClose={closeModal} />}
      {totalPrice !== 0 ? (
        <div>
          <div>
            {books.map((book, index) => (
              <React.Fragment key={book.id}>
                <BookFromCart books={book} className={""} />
                {index !== books.length - 1 && (
                  <div className="dividing-line"></div>
                )}
              </React.Fragment>
            ))}
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
              text="Checkout"
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
