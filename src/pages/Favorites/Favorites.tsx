import React, { useEffect } from 'react'
import Book from '../../components/Book/Book';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { StylesWrapper } from './style';
import { getBookThunk, getBookToFavoritesThunk } from '../../store/thunk/thunkBook';

const Favorites = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.favorites.book);
  useEffect(() => {
    dispatch(getBookToFavoritesThunk());
  }, [dispatch]);
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
