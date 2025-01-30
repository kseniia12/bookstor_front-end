import React, { useEffect } from "react";
import Book from "../Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk } from "../../store/thunk/thunkBook";
import { useSearchParams } from "react-router-dom";
import PaginationLink from "../Pagination/Pagination";
import FilterByGenre from "../FilterByGenre/FilterByGenre";
import FilterBySort from "../FilterBySort/FilterBySort";
import FilterByAuthor from "../FilterByAuthor/FilterByAuthor";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const books = useAppSelector((state) => state.book.book);
  const dispatch = useAppDispatch();
  const page = Number(searchParams.get("page")) || 1;
  const filter = searchParams.getAll("filter");
  const sort = searchParams.get("sort");
  const data = { page: page, filter: filter, sort: sort };

  useEffect(() => {
    dispatch(getBookThunk(data));
  }, [dispatch, window.location.href]);
  return (
    <StylesWrapper>
      <div className="container">
        <div>Catalog</div>
        <div className="container__filter">
          <FilterByGenre />
          <FilterBySort />
          <FilterByAuthor />
        </div>
      </div>
      <div className="books">
        {Object.keys(books).map((bookId) => {
          return (
            <Book books={books[bookId]} key={bookId} className="books__book" />
          );
        })}
      </div>
      <PaginationLink />
    </StylesWrapper>
  );
};
export default CatalogBooks;
