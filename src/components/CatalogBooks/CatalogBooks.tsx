import React, { useEffect } from "react";
import Book from "../Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk } from "../../store/thunk/thunkBook";
import { useSearchParams } from "react-router-dom";
import PaginationLink from "../Pagination/Pagination";
import SortByGenre from "../SortByGenre/SortByGenre";
import Price from "../Price/Price";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const books = useAppSelector((state) => state.book.book);
  const dispatch = useAppDispatch();
  const page = Number(searchParams.get("page")) || 1;
  const filter = searchParams.getAll("filter");
  const data = { page: page, filter: filter };

  useEffect(() => {
    dispatch(getBookThunk(data));
  }, [dispatch, window.location.href]);
  return (
    <StylesWrapper>
      <SortByGenre />
      {Object.keys(books).map((bookId) => {
        return <Book books={books[bookId]} key={bookId} />;
      })}
      <PaginationLink />
    </StylesWrapper>
  );
};
export default CatalogBooks;
