import React from "react";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { IFormComments } from "../../lib/typing";
import { addCommentBookThunk } from "../../store/thunk/thunkBook";

interface propsComments {
  bookId: number
}
const FormForComments: React.FC<propsComments> = ({bookId}) => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm<IFormComments>();
  const date = new Date();

  const onSubmit: SubmitHandler<IFormComments> = async (data) => {
     await dispatch(addCommentBookThunk({comment: data.comment, date, bookId}))
     reset();
  };
  return (
    <StylesWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item">
          <textarea className="input" placeholder="Share a comment" {...register("comment")} />
        </div>
        <Button className="button" text="Post a comment" />
      </form>
    </StylesWrapper>
  );
};

export default FormForComments;

