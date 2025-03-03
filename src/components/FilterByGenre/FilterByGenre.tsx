import React, { useState, useRef, useEffect } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import SortByGenre from "../SortByGenre/SortByGenre";

const FilterByGenre = () => {
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
        <div className="container__title">Genre</div>
        <img className="arrow" src={arrowToOpenForm} alt="Arrow to open form" />
      </div>
      {/* {open && <SortByGenre />} */}
    </StylesWrapper>
  );
};

export default FilterByGenre;
