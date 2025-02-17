import React, { useEffect } from "react";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCommentBookThunk } from "../../store/thunk/thunkComment";

interface propsComments {
  bookId: number;
}

const Comments: React.FC<propsComments> = ({ bookId }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(getCommentBookThunk({ bookId }));
  }, [dispatch]);

  const calculateDaysDifference = (dateString: string) => {
    const commentDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - commentDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <StylesWrapper>
      <div className="big-title title">Comments</div>
      {comments.map((comment) => (
        <div className="comment">
          <div className="comment__photo">
            <img
              className="comment__photo--user"
              src={comment.user.photo}
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
    </StylesWrapper>
  );
};

export default Comments;
