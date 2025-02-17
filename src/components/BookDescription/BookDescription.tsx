import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";
import { IBook } from "../../lib/types/types";
import rating from "../../assets/rating.png";
import Button from "../../components/Button/Button";
import { getBookThunk } from "../../store/thunk/thunkBook";
import { StylesWrapper } from "./style";
import RatingBookForUser from "../RatingBookForUser/RatingBookForUser";
import rateBook from "../../assets/rateBook.png";
import { addBookToCartThunk } from "../../store/thunk/thunkCart";
import constant from "../../lib/constants/constants";
const BookDescription = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const cart = useAppSelector((state) => state.cart.book);
  const books = useAppSelector((state) => state.book.bookNormalized);
  const [textButton, setTextButton] = useState(`$${books.priceHard} USD`);
  const navigate = useNavigate()
  const isBookInCart = cart.hasOwnProperty(id !== undefined ? id : 0);

  useEffect(() => {
    if (Object.keys(books).length - 1 === 0) {
      dispatch(getBookThunk({}));
    }
    if (isBookInCart) {
      setTextButton("Added to cart");
    } else {
      setTextButton(`$${book?.priceHard} USD`);
    }
  }, [dispatch, isBookInCart]);

  const [favorites, setFavorites] = useState<boolean>(false);

  const bookId = Number(id);

  if (!id) {
    return <div>Book not found</div>;
  }

  const book: IBook | undefined = books[id];
  if (!book) {
    return <div>Loading...</div>;
  }

  const AddOrRemoveFavorites = () => {
    setFavorites(!favorites);
  };

  const addBookToCart = () => {
    dispatch(addBookToCartThunk({ bookId }));
    setTextButton("Added to cart");
    navigate(constant.CART)
  };

  return (
    <StylesWrapper src={favorites} isBookInCart={isBookInCart}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`${constant.PATH_TO_FOLDER}/${book.cover}`}
          alt={book.name}
        />
      </div>
      <div>
        <p className="big-title">{book.name}</p>
        <p className="author">{book.author.name}</p>
        <div className="rating">
          <div className="rating__section-value">
            <img src={rating} alt="rating" />
            <div className="rating__value">5.0</div>
          </div>
          <RatingBookForUser bookId={Number(book.id)} />
          <div className="rating__book">
            <img src={rateBook} alt="rating" />
            <div className="rating__title">Rate this book</div>
          </div>
        </div>
        <p className="description">Description</p>
        <p className="description__text">{book.description}</p>
        <div className="button">
          <div>
            <p className="button__title">Paperback</p>
            <Button text={`$${book.priceSoft} USD`} />
          </div>
          <div>
            <p className="button__title">Hardcover</p>
            <Button
              text={`${textButton}`}
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
