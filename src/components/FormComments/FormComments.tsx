import React from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { addCommentBookThunk } from "../../store/comments/thunkComment";

interface PropsComments {
  bookId: number;
  onCommentAdded: () => void ;
}

const FormForComments: React.FC<PropsComments> = ({ bookId, onCommentAdded }) => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register, reset } = useForm<{ comment: string }>();
  const date = new Date();

  const onSubmit: SubmitHandler<{ comment: string }> = async (data) => {
    if (data.comment !== "") {
      await dispatch(addCommentBookThunk({ comment: data.comment, date, bookId }));
      onCommentAdded();
    }
    reset();
  };

  return (
    <StylesWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item">
          <textarea
            className="item__input-field"
            placeholder="Share a comment"
            {...register("comment")}
          />
        </div>
        <Button text="Post a comment" />
      </form>
    </StylesWrapper>
  );
};

export default FormForComments;
