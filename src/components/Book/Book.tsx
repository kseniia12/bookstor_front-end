import React, { useState } from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";
import RatingBook from "../RatingBook/RatingBook";
import { IBook } from "../../lib/typing";
import { useNavigate } from "react-router-dom";
import BookPage from "../../pages/BookPage/BookPage";
import constant from "../../constants/constants";

export interface IBookProps {
  books: IBook;
  className: string;
}

const Book: React.FC<IBookProps> = ({ books }) => {
  const [favorites, setFavorites] = useState<boolean>(false);
  const navigate = useNavigate();
  const AddOrRemoveFavorites = () => {
    setFavorites(!favorites);
  };

  const sendBookId = () => {
    return <BookPage/>
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
        <Button className="button" text={`$${books.priceHard} USD`} />
      </div>
    </StylesWrapper>
  );
};

export default Book;
