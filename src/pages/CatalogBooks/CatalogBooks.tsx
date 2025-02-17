import React, { useEffect } from "react";
import Book from "../../components/Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk, getFilterThunk } from "../../store/thunk/thunkBook";
import { useSearchParams } from "react-router-dom";
import PaginationLink from "../../components/Pagination/Pagination";
import FilterByGenre from "../../components/FilterByGenre/FilterByGenre";
import FilterBySort from "../../components/FilterBySort/FilterBySort";
import FilterByAuthor from "../../components/FilterByAuthor/FilterByAuthor";
import Banner from "../../components/Banner/Banner";
import Authorization from "../../components/Authorization/Authorization";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const books = useAppSelector((state) => state.book.books);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();
  const page = Number(searchParams.get("page")) || 1;
  const genre = searchParams.getAll("genre");
  const sort = searchParams.get("sort");
  const maxPrice = searchParams.get("max");
  const minPrice = searchParams.get("min");
  const data = {
    page: page,
    genre: genre,
    sort: sort,
    maxPrice: maxPrice,
    minPrice: minPrice,
  };

  useEffect(() => {
    dispatch(getBookThunk(data));
    dispatch(getFilterThunk())
  }, [dispatch, window.location.href]);

  return (
    <StylesWrapper>
      <Banner />
      <div className="container">
        <div>Catalog</div>
        <div className="container__filter">
          <FilterByGenre />
          <FilterBySort />
          <FilterByAuthor />
        </div>
      </div>
      <div className="books">
        {(books).map((bookId) => {
          return (
            <Book books={bookId} className="books__book" />
          );
        })}
      </div>
      <PaginationLink />
      {user.id === 0 ? <Authorization /> : ""}
    </StylesWrapper>
  );
};
export default CatalogBooks;
