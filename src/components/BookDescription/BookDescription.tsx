import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { IBook } from "../../lib/typing";


import Button from "../../components/Button/Button";
import {
  addBookToCartThunk,
  getBookThunk,
} from "../../store/thunk/thunkBook";
import { StylesWrapper } from "./style";
import RatingBookForUser from "../RatingBookForUser/RatingBookForUser";

const BookDescription = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const books = useAppSelector((state) => state.book.book);

  useEffect(() => {
    if (Object.keys(books).length - 1 === 0) {
      dispatch(getBookThunk({}));
    }
  }, [dispatch]);

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
  };

  return (
    <StylesWrapper src={favorites}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${book.cover}`}
          alt={book.name}
        />
      </div>
      <div>
        <p className="title">{book.name}</p>
        <p className="author">{book.author.name}</p>
        <RatingBookForUser bookId={Number(book.id)} />
        <p className="description">Description</p>
        <p className="description__text">{book.description}</p>
        <div className="button">
          <div>
            <p className="button__title">Paperback</p>
            <Button text={`$${book.priceSoft} USD`} />
          </div>
          <div>
            <p className="button__title">Hardcover</p>
            <Button text={`$${book.priceHard} USD`} onClick={addBookToCart} />
          </div>
        </div>
      </div>
    </StylesWrapper>
  );
};

export default BookDescription;
