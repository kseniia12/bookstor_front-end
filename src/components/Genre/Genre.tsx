import React, { useEffect } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";

export interface IProps {
  className: string;
}

const SortByGenre: React.FC<IProps> = (props) => {
  const { selected, isSelected, onChange } = useMultiselect([]);
  const navigate = useNavigate();
  const filters = useAppSelector((state) => state.filter.filter);

  const updateURL = () => {
    const params = new URLSearchParams();
    selected.forEach((index) =>
      params.append("filter", (index + 1).toString())
    );
    navigate(`/catalog?${params.toString()}`);
  };

  useEffect(() => {
    updateURL();
  }, [selected]);

  return (
    <div className={props.className}>
      <StylesWrapper>
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
    </div>
  );
};

export default SortByGenre;
