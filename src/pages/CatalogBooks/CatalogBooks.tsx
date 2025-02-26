import React, { useEffect } from "react";
import Book from "../../components/Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBooksThunk, getFilterThunk } from "../../store/book/thunkBook";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PaginationLink from "../../components/Pagination/Pagination";
import FilterByGenre from "../../components/FilterByGenre/FilterByGenre";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";
import Sorting from "../../components/Sorting/Sorting";
import Banner from "../../components/Banner/Banner";
import Authorization from "../../components/AuthorizationBanner/AuthorizationBanner";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const books = useAppSelector((state) => state.book.books);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();
  const page = Number(searchParams.get("page")) || 1;
  const genre = searchParams.getAll("genre");
  const sort = searchParams.get("sort") || "price";
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
    dispatch(getBooksThunk(data));
    dispatch(getFilterThunk());
  }, [dispatch, location]);

  return (
    <StylesWrapper>
      <Banner />
      <div className="container">
        <div className="big-title">Catalog</div>
        <div className="container__filter">
          <FilterByGenre />
          <FilterByPrice />
          <Sorting />
        </div>
      </div>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} >
            <Book book={book} />
          </div>
        ))}
      </div>
      <PaginationLink />
      {!user ? <Authorization /> : ""}
    </StylesWrapper>
  );
};
export default CatalogBooks;
