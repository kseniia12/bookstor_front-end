import React from "react";
import { useSearchParams } from "react-router-dom";

interface IpropsSort {
  option: any;
}

const SortList: React.FC<IpropsSort> = ({ option }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (option: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", option.split(" ")[0].toLowerCase());
    setSearchParams(newParams);
  };

  return (
    <li key={option}>
      <label className={`label ${option.split(" ")[0].toLowerCase() === searchParams.get("sort") ? "selected" : ""}`}>
        <input
          type="radio"
          value={option}
          checked={option.split(" ")[0].toLowerCase() === searchParams.get("sort")}
          onChange={() => handleChange(option)}
          className="input"
        />
        {option}
      </label>
    </li>
  );
};

export default SortList;
