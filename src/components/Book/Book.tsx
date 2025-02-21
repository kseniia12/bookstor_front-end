import React from "react";
import { StyledRating, StylesWrapper } from "./style";
import Button from "../Button/Button";
import { IBook } from "../../lib/types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addBookToFavoritesThunk } from "../../store/favorites/thunkFavorites";
import { addBookToCartThunk } from "../../store/cart/thunkCart";
import constant from "../../lib/constants/constants";

export interface IBookProps {
  book: IBook;
  className?: string;
}

const Book: React.FC<IBookProps> = ({ book }) => {
  const cart = useAppSelector((state) => state.cart.book);
  const user = useAppSelector((state) => state.users.user);
  const favoritesBook = useAppSelector((state) => state.favorites.book);
  const dispatch = useAppDispatch();
  const bookId = Number(book.id);
  const navigate = useNavigate();
  const isBookInCart = cart[book.id];
  const isBookInFavorites = book.id ? !!favoritesBook[book.id] : false;


  const AddOrRemoveFavorites = () => {
    dispatch(addBookToFavoritesThunk({ bookId }));
  };

  const sendBookId = () => {
    navigate(`/book/${book.id}`);
  };

  const addBookToCart = () => {
    if (user) {
      dispatch(addBookToCartThunk({ bookId }));
    }
  };

  return (
    <StylesWrapper isBookInFavorites={isBookInFavorites}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`${constant.PATH_TO_FOLDER}/${book.cover}`}
          alt="Book"
          onClick={sendBookId}
        />
      </div>
      {book.bestseller ? <div className="bestseller">Bestseller</div> : ""}
      <div onClick={sendBookId}>
        <div className="genre">{book.name}</div>
        <div className="author">{book.author.name}</div>
        <div className="rating-block">
          <StyledRating
            className="rating-block__star"
            value={book.averageRating}
            readOnly
          />
          <div className="rating-block__value">{book.averageRating}</div>
        </div>
      </div>
      <Button
        className={isBookInCart ? "button" : ""}
        text={isBookInCart ? "Added to cart" : `$${book.priceHard} USD`}
        onClick={addBookToCart}
      />
    </StylesWrapper>
  );
};

export default Book;
