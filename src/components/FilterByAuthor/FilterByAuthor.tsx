import React, { useState } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";

import { StylesWrapper } from "./style";


const FilterByAuthor = () => {
  const [open, setOpen] = useState<boolean>(false);

  const changeStateForm = () => {
    setOpen(!open);
  };

  return (
    <StylesWrapper open={open}>
      <div className="container">
      {open && <select className="container__select">
          <option value="value1">Вариант 1</option>
          <option value="value2">Вариант 2</option>
          <option value="value3">Вариант 3</option>
          <option value="value4">Вариант 4</option>
        </select>}
        

        <img
          src={arrowToOpenForm}
          alt="Arrow to open form"
          className="arrow"
          onClick={changeStateForm}
        />
      </div>
    </StylesWrapper>
  );
};

export default FilterByAuthor;
