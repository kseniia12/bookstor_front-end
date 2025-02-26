import React from "react";
import { IBook } from "../../lib/types/types";
import { StylesWrapper } from "./style";
import cart from "../../assets/delete.png";
import { useAppDispatch } from "../../hooks";
import {
  changeCountBooksThunk,
  deleteBookToCartThunk,
  getBookToCartThunk,
} from "../../store/cart/thunkCart";
import constant from "../../lib/constants/constants";

export interface IBookProps {
  books: IBook;
  className: string;
}

const BookFromCart: React.FC<IBookProps> = ({ books }) => {
  const dispatch = useAppDispatch();

  const deleteBookFromCart = (id: number[]) => {
    dispatch(deleteBookToCartThunk({ id }));
    dispatch(getBookToCartThunk());
  };

  const increaseCountBooks = () => {
    if (books.count !== undefined && books.count <= books.countHard) {
      dispatch(
        changeCountBooksThunk({
          count: books.count + 1,
          bookId: Number(books.id),
        })
      );
    }
  };

  const reduceCountBooks = () => {
    if (books.count !== undefined && books.count > 1) {
      dispatch(
        changeCountBooksThunk({
          count: books.count - 1,
          bookId: Number(books.id),
        })
      );
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
            <div className="counter__button" onClick={reduceCountBooks}>
              -
            </div>
            <div>{books.count}</div>
            <div className="counter__button" onClick={increaseCountBooks}>
              +
            </div>
          </div>
          <div>
            <img
              className="cart"
              src={cart}
              alt="cart"
              onClick={() => deleteBookFromCart([Number(books.id)])}
            />
          </div>
        </div>
        <div className="normal-title info__price">{`$${books.priceHard} USD`}</div>
      </div>
    </StylesWrapper>
  );
};

export default BookFromCart;
