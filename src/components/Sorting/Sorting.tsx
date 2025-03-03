import React from "react";
import { StylesWrapper } from "./style";
import SortList from "./SortList";

type Item = {
  label: string;
  shortLabel: string;
  value: string | number;
};

const options = ["Price", "Name", "Author name", "Rating", "Dates of issue"];

const FilterByAuthor = () => {


  return (
    <StylesWrapper open={true}>
      <ul className="menu">
        {options.map((option) => (
          <SortList option={option} />
        ))}
      </ul>
    </StylesWrapper>
  );
};

export default FilterByAuthor;
