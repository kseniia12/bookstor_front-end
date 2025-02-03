import React from "react";
import { IBook } from "../../lib/typing";
import { StylesWrapper } from "./style";
export interface IBookProps {
  books: IBook;
  className: string;
}
const BookFromCart: React.FC<IBookProps> = ({books}) => {
  return (
    <StylesWrapper>
      <div className="book">
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${books.cover}`}
          alt="Book"
        />
      </div>
      <div>
        <div>{books.name}</div>
        <div>{books.author.name}</div>
       <div>{`$${books.priceHard} USD`}</div>
      </div>
      {/* <div>
        <div className="title">{books.name}</div>
        <div className="author">{books.author.name}</div>
      </div> */}
    </StylesWrapper>
  );
};

export default BookFromCart;
