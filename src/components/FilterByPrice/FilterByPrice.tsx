import React, { useState, useRef, useEffect } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import Price from "../Price/Price";

const FilterBySort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const changeStateForm = () => {
    setOpen((prev) => !prev);
  };



  return (
    <StylesWrapper open={open} ref={popupRef}>
      <div className="container" onClick={changeStateForm}>
        <div className="container__title">Price</div>
        <img src={arrowToOpenForm} alt="Arrow to open form" className="arrow" />
      </div>
      {/* {open && <Price />} */}
    </StylesWrapper>
  );
};

export default FilterBySort;
