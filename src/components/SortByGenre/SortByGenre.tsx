import React, { useEffect } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import FilterListByGenre from "./FilterListByGenre";
import { useSearchParams } from "react-router-dom";

interface IPropsSort {
  data: string[];
}

const SortByGenre: React.FC<IPropsSort> = ({ data }) => {
  const filters = useAppSelector((state) => state.filter.filter);
  const [searchParams, setSearchParams] = useSearchParams();
  const { selected, onChange } = useMultiselect(searchParams.getAll("genre"));

  const isInitianRender = React.useRef(true);

  useEffect(() => {
    if (isInitianRender.current) {
      isInitianRender.current = false;
      return;
    }
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("genre");
    selected.forEach((item) => {
      newParams.append("genre", item);
    });
    setSearchParams(newParams);
  }, [selected]);

  return (
    <StylesWrapper>
      <ul className="filter-list">
        {filters.map((filter) => (
          <FilterListByGenre
            key={filter.id}
            id={filter.id}
            onChange={onChange}
            name={filter.name}
            checked={data.includes(filter.id.toString())}
          />
        ))}
      </ul>
    </StylesWrapper>
  );
};

export default SortByGenre;
