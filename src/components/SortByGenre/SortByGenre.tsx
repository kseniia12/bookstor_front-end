import React from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import { StylesWrapper } from "./style";
import FilterListByGenre from "./FilterListByGenre";

interface i {
  data: string[];

}

const SortByGenre: React.FC<i> = ({ data
 }) => {
  const filters = useAppSelector((state) => state.filter.filter);
  const { onChange } = useMultiselect([]);

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

// import React from "react";
// import { useAppSelector } from "../../hooks";
// import { StylesWrapper } from "./style";
// import { useSearchParams } from "react-router-dom";
// import queryString from "query-string";
// import FilterListByGenre from "./FilterListByGenre";

// const SortByGenre = () => {
//   const filters = useAppSelector((state) => state.filter.filter);
//   const [_, setSearchParams] = useSearchParams();

//   const updateURL = (genre: number) => {
//     const genreQueryString = queryString.stringify({ genre });
//     if (!genreQueryString){
//       setSearchParams(genreQueryString);
//     }
//     setSearchParams("")
//   };

//   return (
//     <StylesWrapper>
//       <ul className="filter-list">
//         {filters.map((filter) => (
//           <FilterListByGenre
//             key={filter.id}
//             onChange={() => updateURL(filter.id)}
//             name={filter.name}
//             id={filter.id}
//           />
//         ))}
//       </ul>
//     </StylesWrapper>
//   );
// };

// export default SortByGenre;
