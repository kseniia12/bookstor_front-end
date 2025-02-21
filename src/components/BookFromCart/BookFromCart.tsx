import React, { useState } from "react";
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
  const [count, setCount] = useState(books.count ?? 0);
  const dispatch = useAppDispatch();
  
  const deleteBookFromCart = (id: number) => {
    dispatch(deleteBookToCartThunk({ id }));
    dispatch(getBookToCartThunk());
  };
  
  const increaseCountBooks = () => {
    if (count <= books.countHard) {
      // setCount(count + 1);
      dispatch(
        changeCountBooksThunk({ count: count + 1, bookId: Number(books.id) })
      );
    }
  };

  const reduceCountBooks = () => {

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
            <div className="counter__button" onClick={reduceCountBooks}>
              -
            </div>
            <div>{count}</div>
            <div className="counter__button" onClick={increaseCountBooks}>
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
        <div className="normal-title info__price">{`$${books.priceHard} USD`}</div>
      </div>
    </StylesWrapper>
  );
};

export default BookFromCart;
