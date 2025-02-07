import React, { useEffect, useState } from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";

import { IBook } from "../../lib/typing";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addBookToCartThunk,
  addBookToFavoritesThunk,
} from "../../store/thunk/thunkBook";
import { Rating } from "@mui/material";

export interface IBookProps {
  books: IBook;
  className: string;
}

const Book: React.FC<IBookProps> = ({ books }) => {
  const cart = useAppSelector((state) => state.cart.book);
  const favoritesBook = useAppSelector((state) => state.favorites.book);
  const dispatch = useAppDispatch();
  const bookId = Number(books.id);
  const [textButton, setTextButton] = useState(`$${books.priceHard} USD`);
  const navigate = useNavigate();
  const isBookInCart = cart.hasOwnProperty(books.id);

  useEffect(() => {
    if (isBookInCart) {
      setTextButton("Added to cart");
    } else {
      setTextButton(`$${books.priceHard} USD`);
    }
  }, [isBookInCart, books.priceHard]);
  
  const isBookInFavorites = favoritesBook.hasOwnProperty(books.id);
 
  
  const AddOrRemoveFavorites = () => {
    dispatch(addBookToFavoritesThunk({ bookId }));
  };

  const sendBookId = () => {
    navigate(`/book/${books.id}`);
  };

  const addBookToCart = () => {
    dispatch(addBookToCartThunk({ bookId }));
    setTextButton("Added to cart");
  };

  return (
    <StylesWrapper isBookInFavorites={isBookInFavorites} isBookInCart={isBookInCart}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${books.cover}`}
          alt="Book"
        />
      </div>
      <div onClick={sendBookId}>
        <div className="genre">{books.name}</div>
        <div className="author">{books.author.name}</div>
      </div>
      <div>
        <div className="averageRating__block">
          <Rating
            className="simple-controlled"
            value={books.averageRating}
            readOnly
          />
          <div className="averageRating">{books.averageRating}.0</div>
        </div>

        <Button className="button" text={textButton} onClick={addBookToCart} />
      </div>
    </StylesWrapper>
  );
};

export default Book;
