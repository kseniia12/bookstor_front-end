import React from "react";
import Book from "../../components/Book/Book";
import { useConverterObjectToArray } from "../../hooks";
import { StylesWrapper } from "./style";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";

const Favorites = () => {
  const books = useConverterObjectToArray((state) => state.favorites.book);
  return (
    <StylesWrapper>
      {books.length !== 0 ? (
        books.map((book, index) => (
          <Book book={book} key={index} className="books" />
        ))
      ) : (
        <EmptyCartComponent />
      )}
    </StylesWrapper>
  );
};

export default Favorites;
