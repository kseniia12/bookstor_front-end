import React, { useMemo } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const SortByGenre = () => {
  const navigate = useNavigate();
  const filters = useAppSelector((state) => state.filter.filter);
  const activeFilter = useAppSelector((state) => state.book.filters);
  const genres = activeFilter.genre;
  const params = new URLSearchParams(window.location.search);

  const initialSelected = Array.from(params.keys())
    .filter((key) => key.startsWith("genre"))
    .map((key) => params.get(key))
    .filter((value): value is string => value !== null);

  const { selected, isSelected, onChange, active } =
    useMultiselect(initialSelected);

  const updateURL = () => {
    const params = new URLSearchParams();
    selected.forEach((index) => params.append("genre", index.toString()));
    navigate(`/?${params.toString()}`);
  };

  useMemo(() => {
    updateURL();
  }, [selected]);

  return (
    <StylesWrapper active={active}>
      <ul className="filter-list">
        {filters.map((filter) => (
          <li key={filter.id.toString()} className="filter-list__item">
            <input
              className="filter-list__checkbox"
              id={filter.id.toString()}
              type="checkbox"
              value={filter.id}
              checked={
                (genres &&
                  genres.length > 0 &&
                  genres.some((genre) =>
                    genre.includes(filter.id.toString())
                  )) ||
                isSelected(filter.id.toString())
              }
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
