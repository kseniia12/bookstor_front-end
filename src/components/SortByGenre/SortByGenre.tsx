import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const SortByGenre = () => {
  const { selected, isSelected, onChange, active } = useMultiselect([]);
  const navigate = useNavigate();
  const filters = useAppSelector((state) => state.filter.filter);

  console.log(active);
  const updateURL = () => {
    const params = new URLSearchParams();
    selected.forEach((index) => params.append("filter", index.toString()));
    navigate(`/?${params.toString()}`);
  };

  useMemo(() => {
    updateURL();
  }, [selected]);

  return (
    <StylesWrapper active={active}>
      <ul className="filter-list">
        {filters.map((filter) => (
          <li key={filter.id.toString()}>
            <input
              className="filter-list__checkbox"
              id={filter.id.toString()}
              type="checkbox"
              value={filter.id}
              checked={isSelected(filter.id.toString())}
              onChange={onChange}
            />
            <label htmlFor={filter.name} className="filter-list__label">
              {filter.name}
            </label>
          </li>
        ))}
      </ul>
    </StylesWrapper>
  );
};

export default SortByGenre;
