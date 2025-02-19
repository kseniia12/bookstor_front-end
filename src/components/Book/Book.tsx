import React, { useMemo, useState } from "react";
import { StyledRating, StylesWrapper } from "./style";
import Button from "../Button/Button";
import { IBook } from "../../lib/types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addBookToFavoritesThunk } from "../../store/thunk/thunkFavorites";
import { addBookToCartThunk } from "../../store/thunk/thunkCart";
import constant from "../../lib/constants/constants";

export interface IBookProps {
  books: IBook;
  className?: string;
}

const Book: React.FC<IBookProps> = ({ books }) => {
  const cart = useAppSelector((state) => state.cart.book);
  const user = useAppSelector((state) => state.users.user);
  const favoritesBook = useAppSelector((state) => state.favorites.book);
  const dispatch = useAppDispatch();
  const bookId = Number(books.id);
  const [textButton, setTextButton] = useState(`$${books.priceHard} USD`);
  const navigate = useNavigate();
  const isBookInCart = cart.hasOwnProperty(books.id);
  const isBookInFavorites = favoritesBook.hasOwnProperty(books.id);

  useMemo(() => {
    if (isBookInCart) {
      setTextButton("Added to cart");
    } else {
      setTextButton(`$${books.priceHard} USD`);
    }
  }, [isBookInCart, books.priceHard]);

  const AddOrRemoveFavorites = () => {
    dispatch(addBookToFavoritesThunk({ bookId }));
  };

  const sendBookId = () => {
    navigate(`/book/${books.id}`);
  };

  const addBookToCart = () => {
    if (user.id) {
      dispatch(addBookToCartThunk({ bookId }));
      setTextButton("Added to cart");
    }
  };

  return (
    <StylesWrapper
      isBookInFavorites={isBookInFavorites}
      isBookInCart={isBookInCart}
    >
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`${constant.PATH_TO_FOLDER}/${books.cover}`}
          alt="Book"
          onClick={sendBookId}
        />
      </div>
      {books.bestseller ? <div className="bestseller">Bestseller</div> : ""}
      <div onClick={sendBookId}>
        <div className="genre">{books.name}</div>
        <div className="author">{books.author.name}</div>
        <div className="rating-block">
          <StyledRating
            className="rating-block__star"
            value={books.averageRating}
            readOnly
          />
          <div className="rating-block__value">{books.averageRating}</div>
        </div>
      </div>
      <Button className="button" text={textButton} onClick={addBookToCart} />
    </StylesWrapper>
  );
};

export default Book;
