import React, { useState } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import Price from "../Price/Price";

const FilterBySort = () => {
  const [open, setOpen] = useState<boolean>(false);

  const changeStateForm = () => {
    setOpen(!open);
  };

  return (
    <StylesWrapper open={open}>
      <div className="container" onClick={changeStateForm}>
        <div className="title-filter">Price</div>
        <img
          src={arrowToOpenForm}
          alt="Arrow to open form"
          className="arrow"
        />
      </div>
      <div>{open && <Price />}</div>
    </StylesWrapper>
  );
};

export default FilterBySort;
