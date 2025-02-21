import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import rating from "../../assets/rating.png";
import Button from "../../components/Button/Button";
import { StylesWrapper } from "./style";
import RatingBookForUser from "../RatingBookForUser/RatingBookForUser";
import rateBook from "../../assets/rateBook.png";
import { addBookToCartThunk } from "../../store/cart/thunkCart";
import { addBookToFavoritesThunk } from "../../store/favorites/thunkFavorites";
import { getBookByIdThunk } from "../../store/book/thunkBook";
import { IBook } from "../../lib/types/types";

const BookDescription = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const bookId = Number(id);
  const [book, setBook] = useState<IBook | null>(null)

  const cart = useAppSelector((state) => state.cart.book);
  const favoritesBook = useAppSelector((state) => state.favorites.book);
  const user = useAppSelector((state) => state.users.ratingBook);

  const isBookInCart = id ? !!cart[id] : false;
  const isBookInFavorites = id ? !!favoritesBook[id] : false;

  useEffect(() => {
    async function getBook() {
      const book = await dispatch(getBookByIdThunk({ bookId })).unwrap();
      setBook(book[0])
    }
    getBook()
  }, []);

  const AddOrRemoveFavorites = () => {
    dispatch(addBookToFavoritesThunk({ bookId }));
  };

  const addBookToCart = () => {
    if (!user.id) {
      return;
    }
    dispatch(addBookToCartThunk({ bookId }));
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
          src={book?.cover}
          alt={book?.name}
        />
      </div>
      <div>
        <p className="big-title">{book?.name}</p>
        <p className="author">{book?.author.name}</p>
        <div className="rating">
          <div className="rating__section-value">
            <img src={rating} alt="rating" />
            <div className="rating__value">
              {id !== undefined && user[id] ? user[id].rate.toFixed(1) : "0.0"}
            </div>
          </div>
          <RatingBookForUser bookId={Number(book?.id)} />
          <div className="rating__book">
            <img src={rateBook} alt="rating" />
            <div className="rating__title">Rate this book</div>
          </div>
        </div>
        <p className="description">Description</p>
        <p className="description__text">{book?.description}</p>
        <div className="button">
          <div>
            <p className="button__title">Paperback</p>
            <Button text={`$${book?.priceSoft} USD`} />
          </div>
          <div>
            <p className="button__title">Hardcover</p>
            <Button
              text={isBookInCart ? "Added to cart" : `$${book?.priceHard} USD`}
              onClick={addBookToCart}
              className="button__cart"
            />
          </div>
        </div>
      </div>
    </StylesWrapper>
  );
};

export default BookDescription;
