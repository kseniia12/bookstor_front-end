import React from "react";

const SortByGenre = () => {
  return (
    <div>
      <select>
        <option value="grapefruit">Грейпфрут</option>
        <option value="lime">Лайм</option>
        <option selected value="coconut">
          Кокос
        </option>
        <option value="mango">Манго</option>
      </select>
    </div>
  );
};

export default SortByGenre;
