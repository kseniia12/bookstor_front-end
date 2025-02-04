import React, { useState } from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";
import RatingBook from "../RatingBook/RatingBook";
import { IBook } from "../../lib/typing";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { addBookToCartThunk } from "../../store/thunk/thunkBook";

export interface IBookProps {
  books: IBook;
  className: string;
}

const Book: React.FC<IBookProps> = ({ books }) => {
  const dispatch = useAppDispatch()
  const bookId = Number(books.id)
  const [favorites, setFavorites] = useState<boolean>(false);
  const [textButton, setTextButton] = useState(`$${books.priceHard} USD`);
  const navigate = useNavigate();
  
  const AddOrRemoveFavorites = () => {
    setFavorites(!favorites);
  };

  const sendBookId = () => {
    navigate(`/book/${books.id}`);
  };

  const addBookToCart = () => {
    dispatch(addBookToCartThunk({bookId}))
    setTextButton('Added to cart')
  };

  return (
    <StylesWrapper src={favorites}>
      <div className="book" onClick={sendBookId}>
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${books.cover}`}
          alt="Book"
        />
      </div>
      <div>
        <div className="genre">{books.name}</div>
        <div className="author">{books.author.name}</div>
      </div>
      <div>
        <RatingBook />
        <Button className="button" text={textButton} onClick={addBookToCart}/>
      </div>
    </StylesWrapper>
  );
};

export default Book;
