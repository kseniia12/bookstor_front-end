import React, { useState, useEffect, useRef } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import Price from "../Price/Price";

const FilterBySort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const changeStateForm = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <StylesWrapper open={open} ref={popupRef}>
      <div className="container" onClick={changeStateForm}>
        <div className="title-filter">Price</div>
        <img
          src={arrowToOpenForm}
          alt="Arrow to open form"
          className="arrow"
        />
      </div>
      {open && <Price />}
    </StylesWrapper>
  );
};

export default FilterBySort;
