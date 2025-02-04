import React, { useState } from "react";
import { IBook } from "../../lib/typing";
import { StylesWrapper } from "./style";
import cart from "../../assets/delete.png";
import { useAppDispatch } from "../../hooks";
import Button from "../Button/Button";
import { addBookToCartThunk, changeCountBooksThunk, deleteBookToCartThunk } from "../../store/thunk/thunkBook";
// import { axiosDeleteBookFromCart } from "../../API/bookApi";
export interface IBookProps {
  books: IBook;
  className: string;
}
const BookFromCart: React.FC<IBookProps> = ({ books }) => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch()
  const deleteBookFromCart = (id: number) => {
    dispatch(deleteBookToCartThunk({id}))
  }

  const addBookToCart = () => {
    dispatch(changeCountBooksThunk({ count: count + 1, bookId: Number(books.id) }));
    setCount(count + 1);
  };

  const addBookToCartmin = () => {
    if (count > 1) {
      dispatch(changeCountBooksThunk({ count: count - 1, bookId: Number(books.id) }));
      setCount(count - 1);
    }
  };
  
  return (
    <StylesWrapper>
      <div className="book">
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${books.cover}`}
          alt="Book"
        />
      </div>
      <div className="info">
        <div>
          <div className="info__title">{books.name}</div>
          <div className="info__author">{books.author.name}</div>
        </div>
        <div className="counter">
          <div className="counter__u">
            <div className="counter__v" onClick={addBookToCartmin}>-</div>
            <div>{count}</div>
            <div className="counter__v" onClick={addBookToCart}>+</div>
          </div>
          <img className="cart" src={cart} alt="cart" onClick={()=>(deleteBookFromCart(Number(books.id)))}/>
        </div>
        <div className="info__price">{`$${books.priceHard} USD`}</div>
      </div>
    </StylesWrapper>
  );
};


export default BookFromCart;
