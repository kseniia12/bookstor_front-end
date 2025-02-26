import React, { useEffect, useMemo } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { IFilters } from "../../lib/types/types";


const SortByGenre = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const filters = useAppSelector((state) => state.filter.filter);
  const activeFilter = useAppSelector((state) => state.book.filters) as IFilters;
  const genres = activeFilter.genre;
  const params = new URLSearchParams(location.search);

  const initialSelected = Array.from(params.keys())
    .filter((key) => key.startsWith("genre"))
    .map((key) => params.get(key))
    .filter((value): value is string => value !== null);

  const { selected, isSelected, onChange } =
    useMultiselect(initialSelected);

    useEffect(() => {
      const updateURL = () => {
        const params = new URLSearchParams();
        selected.forEach((index) => params.append("genre", index.toString()));
        navigate(`/?${params.toString()}`);
      };
  
      updateURL();
    }, [selected, navigate]);


  return (
    <StylesWrapper>
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
