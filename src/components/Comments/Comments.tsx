/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCommentBookThunk } from "../../store/comments/thunkComment";
import { IComment } from "../../lib/types/types";
import FormForComments from "../FormComments/FormComments";
import userPhoto from "../../assets/userPhoto.png";

interface propsComments {
  bookId: number;
}

const Comments: React.FC<propsComments> = ({ bookId }) => {
  const user = useAppSelector((state) => state.users.user);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const dispatch = useAppDispatch();
  
  const getCommentsBook = async () => {
    const fetchedComments = await dispatch(
      getCommentBookThunk({ bookId })
    ).unwrap();
    setComments(fetchedComments);
  };

  useEffect(() => {
    getCommentsBook();
  }, [bookId]);

  const calculateDaysDifference = (dateString: string) => {
    const commentDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - commentDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <StylesWrapper>
      {comments ? <div className="big-title title">Comments</div> : ""}
      {comments?.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment__photo">
            <img
              className="comment__photo--user"
              src={comment.user.photo ? comment.user.photo : userPhoto}
              alt={comment.user.photo}
            />
          </div>
          <div>
            <div className="comment__user">{comment.user.fullName}</div>
            <div className="comment__date">
              {calculateDaysDifference(comment.date)} days ago
            </div>
            <div className="comment__text">{comment.comment}</div>
          </div>
        </div>
      ))}
      {user ? (
        <FormForComments bookId={bookId} onCommentAdded={getCommentsBook} />
      ) : (
        ""
      )}
    </StylesWrapper>
  );
};

export default Comments;
