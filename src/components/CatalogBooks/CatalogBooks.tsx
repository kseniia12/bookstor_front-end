import React, { useEffect } from "react";
import Book from "../Book/Book";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk } from "../../store/thunk/thunkBook";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router";

const CatalogBooks = () => {
  const [searchParams] = useSearchParams();
  const books = useAppSelector((state) => state.book.book);
  const dispatch = useAppDispatch();
  const id = Number(searchParams.get("page"));
  const data = { page: id };
  useEffect(() => {
    dispatch(getBookThunk(data));
  }, [dispatch]);
  return (
    <StylesWrapper>
      {Object.keys(books).map((bookId) => {
        return <Book books={books[bookId]} key={bookId} />;
      })}
    </StylesWrapper>
  );
};
export default CatalogBooks;
