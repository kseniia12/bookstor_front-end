import React, { useEffect } from "react";
import { StylesWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBookThunk, getCommentBookThunk } from "../../store/thunk/thunkBook";

interface propsComments {
  bookId: number
}

const Comments: React.FC<propsComments> = ({bookId}) => {
  const dispatch = useAppDispatch()
  const comments = useAppSelector((state) => state.comments.comments);
  
  useEffect(() => {
    dispatch(getCommentBookThunk({bookId}));
  }, [dispatch]);

  const calculateDaysDifference = (dateString: string) => {
    const commentDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - commentDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <>
      {comments.map((comment) => (
        <StylesWrapper>
          <div>Comments</div>
          <div className="photo">
            <img
              className="photo__user"
              src={comment.user.photo}
              alt={comment.user.photo}
            />
          </div>
          <div>
            <div className="user">{comment.user.fullName}</div>
            <div className="date">
              {calculateDaysDifference(comment.date)} days ago
            </div>
            <div className="comment">{comment.comment}</div>
          </div>
        </StylesWrapper>
      ))}
    </>
  );
};

export default Comments;
