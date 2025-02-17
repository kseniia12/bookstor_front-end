import React, { useState, useEffect } from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const FilterByAuthor = () => {
  const filters = useAppSelector((state) => state.book.filters);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const initialSelectedOption = params.get("sort") || filters.sort;
  const [selectedOption, setSelectedOption] = useState<string>(
    initialSelectedOption
  );

  const changeStateForm = () => {
    setOpen(!open);
  };

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectedOption) {
      params.set("sort", selectedOption);
      navigate({ search: params.toString() });
    }
  }, [selectedOption, navigate]);

  return (
    <StylesWrapper open={open}>
      <div onClick={changeStateForm}>
        <div className="container">
          <select
            className="container__select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="1">Price</option>
            <option value="2">Name</option>
            <option value="3">Author name</option>
            <option value="4">Rating</option>
            <option value="5">Date of issue</option>
          </select>
        </div>
        <img src={arrowToOpenForm} alt="Arrow to open form" className="arrow" />
      </div>
    </StylesWrapper>
  );
};

export default FilterByAuthor;
