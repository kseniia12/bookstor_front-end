import React from "react";
import Book from "../../components/Book/Book";
import { useAppSelector } from "../../hooks";
import { StylesWrapper } from "./style";
import EmptyCartComponent from "../../components/EmptyCartComponent/EmptyCartComponent";

const Favorites = () => {
  const books = useAppSelector((state) => state.favorites.book);
  return (
    <StylesWrapper>
      {Object.keys(books).length !== 0 ? (
        Object.keys(books).map((bookId) => (
          <Book books={books[bookId]} key={bookId} className="books__book" />
        ))
      ) : (
        <EmptyCartComponent />
      )}
    </StylesWrapper>
  );
};

export default Favorites;
