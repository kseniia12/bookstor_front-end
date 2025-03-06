import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "./Sorting";
import classNames from "classnames";

interface SortListProps {
  option: Item;
}

const SortList: React.FC<SortListProps> = ({ option }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (option: Item) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", option.value);
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (searchParams.get("sort")) {
      return;
    }
    const defaultOption: Item = { ...option, value: "price" };
    handleChange(defaultOption);
  }, []);

  return (
    <li key={option.value}>
      <label
        className={classNames("label", {
          selected: option.shortLabel === searchParams.get("sort"),
        })}
      >
        <input
          type="radio"
          value={option.label}
          checked={option.shortLabel === searchParams.get("sort")}
          onChange={() => handleChange(option)}
          className="input"
        />
        {option.label}
      </label>
    </li>
  );
};

export default SortList;
