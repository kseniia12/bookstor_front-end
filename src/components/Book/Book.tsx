import React, { useEffect, useState } from "react";
import { StylesWrapper } from "./style";

import Button from "../Button/Button";
import RatingBook from "../RatingBook/RatingBook";
import Paginationf from "../Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk } from "../../store/thunk/thunkBook";
import { IBook } from "../../lib/typing";

interface IBookProps {
  books: IBook
}

const Book: React.FC<IBookProps> = ({books}) => {
  const [favorites, setFavorites] = useState<boolean>(false);

  const AddOrRemoveFavorites = () => {
    setFavorites(!favorites)
  }

  return (
    <StylesWrapper src={favorites}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img className="book__img" src={`http://localhost:4000/upload/${books.cover}`} alt="Book" />
      </div>
      <div>
        <div className="genre">${books.name}</div>
        <div className="author">C. S. Lewis</div>
      </div>
      <div>
        <RatingBook />
        <Button className="button" text={`$${books.priceHard} USD`} />
      </div>
      {/* <Paginationf/> */}
    </StylesWrapper>
  );
};

export default Book;
