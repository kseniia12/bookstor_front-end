import React from 'react'
import Book from '../../components/Book/Book';
import { useAppSelector } from '../../hooks';
import { StylesWrapper } from './style';

const Favorites = () => {
  const books = useAppSelector((state) => state.favorites.book);
  return (
    <StylesWrapper>
    {Object.keys(books).map((bookId) => {
      return (
        <Book books={books[bookId]} key={bookId} className="books__book" />
      );
    })}
  </StylesWrapper>
  )
}

export default Favorites
