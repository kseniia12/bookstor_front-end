import React, { useState } from "react";
import { IBook } from "../../lib/types/types";
import { StylesWrapper } from "./style";
import cart from "../../assets/delete.png";
import { useAppDispatch } from "../../hooks";
import {
  changeCountBooksThunk,
  deleteBookToCartThunk,
  getBookToCartThunk,
} from "../../store/thunk/thunkCart";
import constant from "../../lib/constants/constants";

export interface IBookProps {
  books: IBook;
  className: string;
}

const BookFromCart: React.FC<IBookProps> = ({ books }) => {
  const [count, setCount] = useState(books.count);
  const dispatch = useAppDispatch();
  const deleteBookFromCart = (id: number) => {
    dispatch(deleteBookToCartThunk({ id }));
    dispatch(getBookToCartThunk());
  };
  const addBookToCart = () => {
    if (typeof count === "undefined") {
      console.error("Count is undefined");
      return;
    }
    dispatch(
      changeCountBooksThunk({ count: count + 1, bookId: Number(books.id) })
    );
    setCount(count + 1);
  };

  const addBookToCartmin = () => {
    if (typeof count === "undefined") {
      console.error("Count is undefined");
      return;
    }

    if (count > 1) {
      dispatch(
        changeCountBooksThunk({ count: count - 1, bookId: Number(books.id) })
      );
      setCount(count - 1);
    }
  };

  return (
    <StylesWrapper>
      <div className="book">
        <img
          className="book__img"
          src={`${constant.PATH_TO_FOLDER}/${books.cover}`}
          alt="Book"
        />
      </div>
      <div className="info">
        <div>
          <div className="big-title">{books.name}</div>
          <div className="info__author">{books.author.name}</div>
        </div>
        <div className="counter">
          <div className="counter__controls">
            <div className="counter__button" onClick={addBookToCartmin}>
              -
            </div>
            <div>{count}</div>
            <div className="counter__button" onClick={addBookToCart}>
              +
            </div>
          </div>
          <div>
            <img
              className="cart"
              src={cart}
              alt="cart"
              onClick={() => deleteBookFromCart(Number(books.id))}
            />
          </div>
        </div>
        <div className="info__price">{`$${books.priceHard} USD`}</div>
      </div>
    </StylesWrapper>
  );
};

export default BookFromCart;
