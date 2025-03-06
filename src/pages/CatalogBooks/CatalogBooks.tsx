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
import Sorting from "../../components/Sorting/Sorting";
import SortByGenre from "../../components/SortByGenre/SortByGenre";
import Price from "../../components/Price/Price";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const [openForm, setOpenForm] = useState<string>("");
  const books = useAppSelector((state) => state.book.books);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const openFormByClicking = (buttonTitle: string) => {
    setOpenForm(buttonTitle);
  };

  useEffect(() => {
    dispatch(getFilterThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getBooksThunk({
        page: searchParams.get("page") || "1",
        genre: searchParams.getAll("genre"),
        sort: searchParams.get("sort"),
        maxPrice: searchParams.get("max"),
        minPrice: searchParams.get("min"),
      })
    );
  }, [dispatch, searchParams]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpenForm("");
    }
  };

  return (
    <StylesWrapper>
      <Banner />
      <div className="container">
        <div className="big-title">Catalog</div>
        <div className="container__filter">
          <FilterButton
            text="Genre"
            onClick={() => openFormByClicking("genre")}
            className={"button-filter"}
            isOpen={openForm === "genre"}
          />
          <FilterButton
            text="Price"
            onClick={() => openFormByClicking("price")}
            className={"button-filter"}
            isOpen={openForm === "price"}
          />
          <FilterButton
            text={`Sort by ${searchParams.get("sort") || "price"}`}
            onClick={() => openFormByClicking("sort")}
            className={"button-sort"}
            isOpen={openForm === "sort"}
          />
        </div>
      </div>
      <div ref={ref}>
        {openForm === "genre" && (
          <SortByGenre data={searchParams.getAll("genre")} />
        )}
        {openForm === "price" && <Price />}
        {openForm === "sort" && <Sorting />}
      </div>
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
