import React, { useEffect, useRef, useState } from "react";
import Book from "../../components/Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBooksThunk, getFilterThunk } from "../../store/book/thunkBook";
import { useSearchParams } from "react-router-dom";
import PaginationLink from "../../components/Pagination/Pagination";
import Banner from "../../components/Banner/Banner";
import Authorization from "../../components/AuthorizationBanner/AuthorizationBanner";
import FilterButton from "../../components/FilterButton/FilterButton";
import FilterByAuthor from "../../components/Sorting/Sorting";
import SortByGenre from "../../components/SortByGenre/SortByGenre";
import Price from "../../components/Price/Price";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState("");
  const books = useAppSelector((state) => state.book.books);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();
  const popupRef = useRef<HTMLDivElement | null>(null);
  
  const data = {
    page: Number(searchParams.get("page")) || 1,
    genre: searchParams.getAll("genre"),
    sort: searchParams.get("sort") || "price",
    maxPrice: searchParams.get("max"),
    minPrice: searchParams.get("min"),
  };

  const handleClickOutside = (formId: string) => {
    setOpen(formId);
  };

  const handleClickOutsidea = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpen("");
    }
  };


  useEffect(() => {
    document.addEventListener("click", handleClickOutsidea);
    dispatch(getBooksThunk(data));
    dispatch(getFilterThunk());
    return () => {
      document.removeEventListener("click", handleClickOutsidea);
    };
  }, [dispatch, searchParams]);

  return (
    <StylesWrapper>
      <Banner />
      <div className="container">
        <div className="big-title">Catalog</div>
        <div className="container__filter">
          <FilterButton
            text="Genre"
            open={open}
            onClick={() => handleClickOutside("genre")}
          />
          <FilterButton
            text="Price"
            open={open}
            onClick={() => handleClickOutside("price")}
          />
          <FilterButton
            text={`Sort by ${data.sort}`}
            open={open}
            onClick={() => handleClickOutside("sort")}
          />
        </div>
      </div>
      {open === "genre" && <SortByGenre data={data.genre} />}
      {open === "price" && <Price />}
      {open === "sort" && <FilterByAuthor />}
      <div className="books">
        {books.map((book) => (
          <div key={book.id}>
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
