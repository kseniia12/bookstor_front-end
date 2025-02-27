import React, { useEffect, useState } from "react";
import BookDescription from "../../components/BookDescription/BookDescription";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendationsBookThunk } from "../../store/book/thunkBook";
import { useParams } from "react-router-dom";
import Book from "../../components/Book/Book";
import { StylesWrapper } from "./style";
import Comments from "../../components/Comments/Comments";
import Authorization from "../../components/AuthorizationBanner/AuthorizationBanner";
import { IBook } from "../../lib/types/types";

const BookPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);
  const { id } = useParams<{ id: string }>();
  const bookId = Number(id);
  const [recommendations, setRecommendations] = useState<IBook[] | null>(null);

  useEffect(() => {
    async function getRecommendationsBook() {
      const recommendationsBook = await dispatch(
        getRecommendationsBookThunk({ bookId })
      ).unwrap();
      setRecommendations(recommendationsBook);
    }
    getRecommendationsBook();
  }, [dispatch, bookId]);

  return (
    <StylesWrapper>
      <BookDescription />
      <Comments bookId={bookId} />
      {!user ? <Authorization /> : ""}
      <div className="recommendations">
        <div className="big-title recommendations__title">Recommendations</div>
        <div className="recommendations__books">
          {recommendations?.map((book) => {
            return <Book book={book} key={book.id} className="books__book" />;
          })}
        </div>
      </div>
    </StylesWrapper>
  );
};

export default BookPage;
