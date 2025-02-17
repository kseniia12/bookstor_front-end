import React, { useEffect } from "react";
import BookDescription from "../../components/BookDescription/BookDescription";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendationsBookThunk } from "../../store/thunk/thunkBook";
import { useParams } from "react-router-dom";
import Book from "../../components/Book/Book";
import { StylesWrapper } from "./style";
import FormForComments from "../../components/FormForComments/FormForComments";
import Comments from "../../components/Comments/Comments";
import Authorization from "../../components/Authorization/Authorization";

const BookPage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.recommendation.book);
  const user = useAppSelector((state) => state.users.user);
  const { id } = useParams<{ id: string }>();
  const bookId = Number(id);
  useEffect(() => {
    dispatch(getRecommendationsBookThunk({ bookId }));
  }, [dispatch]);
  return (
    <StylesWrapper>
      <BookDescription />
      <Comments bookId={bookId}/>
      {user.id !== 0 ? <FormForComments bookId={bookId}/> : ""}
      {user.id === 0 ? <Authorization/> : ""}
      <div className="recommendations">
        <div className="recommendations__title">Recommendations</div>
        <div className="recommendations__books">
          {Object.keys(books).map((bookId) => {
            return (
              <Book
                books={books[bookId]}
                key={bookId}
                className="books__book"
              />
            );
          })}
        </div>
      </div>
    </StylesWrapper>
  );
};

export default BookPage;
