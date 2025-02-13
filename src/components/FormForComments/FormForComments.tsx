import React from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { addCommentBookThunk } from "../../store/thunk/thunkComment";

interface propsComments {
  bookId: number;
}
const FormForComments: React.FC<propsComments> = ({ bookId }) => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register, reset } = useForm<{
    comment: string;
  }>();
  const date = new Date();

  const onSubmit: SubmitHandler<{
    comment: string;
  }> = async (data) => {
    await dispatch(
      addCommentBookThunk({ comment: data.comment, date, bookId })
    );
    reset();
  };
  return (
    <StylesWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item">
          <textarea
            className="input"
            placeholder="Share a comment"
            {...register("comment")}
          />
        </div>
        <Button className="button" text="Post a comment" />
      </form>
    </StylesWrapper>
  );
};

export default FormForComments;
