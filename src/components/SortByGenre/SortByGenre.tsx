import React, { useState } from "react";
import { StylesWrapper } from "./style";
import SortByGenre from "../Genre/Genre";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { useAppDispatch } from "../../hooks";
import { getFilterThunk } from "../../store/thunk/thunkBook";
import Price from "../Price/Price";

const Sort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeStateForm = () => {
    setOpen(!open);
    dispatch(getFilterThunk());
  };

  return (
    <StylesWrapper open={open}>
      <div className="title-filter">Genre</div>
      <img
        src={arrowToOpenForm}
        alt="Arrow to open form"
        className="arrow"
        onClick={changeStateForm}
      />
      <SortByGenre className="sort" />
      <Price className="sort" />
    </StylesWrapper>
  );
};

export default Sort;
