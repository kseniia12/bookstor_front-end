import React from "react";

interface IPropsFilter {
  id: number;
  onChange: any;
  name: string;
  checked: any;
}

const FilterListByGenre: React.FC<IPropsFilter> = ({
  id,
  onChange,
  name,
  checked,
}) => {
  return (
    <li key={id} className="filter-list__item">
      <input
        className="filter-list__checkbox"
        type="checkbox"
        value={id}
        onChange={onChange}
        checked={checked}
      />
      <div className="filter-list__label">{name}</div>
    </li>
  );
};

export default FilterListByGenre;
