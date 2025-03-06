import React from "react";
import { StylesWrapper } from "./style";
import SortList from "./SortList";

export interface Item {
  label: string;
  shortLabel: string;
  value: string;
}

const items: Item[] = [
  {
    label: "Price",
    shortLabel: "price",
    value: "price",
  },
  {
    label: "Name",
    shortLabel: "name",
    value: "name",
  },
  {
    label: "Author name",
    shortLabel: "author",
    value: "author",
  },
  {
    label: "Rating",
    shortLabel: "rating",
    value: "rating",
  },
  {
    label: "Date of issue",
    shortLabel: "date",
    value: "date",
  },
];

const Sorting = () => {
  return (
    <StylesWrapper open={true}>
      <ul className="menu">
        {items.map((option) => (
          <SortList option={option} key={option.value} />
        ))}
      </ul>
    </StylesWrapper>
  );
};

export default Sorting;
