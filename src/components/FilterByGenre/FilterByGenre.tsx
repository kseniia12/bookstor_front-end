import React, { useState } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { useAppDispatch } from "../../hooks";
import { getFilterThunk } from "../../store/thunk/thunkBook";

import { StylesWrapper } from "./style";
import SortByGenre from "../SortByGenre/SortByGenre";

const FilterByGenre = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeStateForm = () => {
    setOpen(!open);
    dispatch(getFilterThunk());
  };

  return (
    <StylesWrapper open={open}>
      <div className="container"  onClick={changeStateForm}>
        <div className="container__title">Genre</div>
        <img
          className="arrow"
          src={arrowToOpenForm}
          alt="Arrow to open form"
        />
      </div>
      {open && <SortByGenre />}
    </StylesWrapper>
  );
};

export default FilterByGenre;
