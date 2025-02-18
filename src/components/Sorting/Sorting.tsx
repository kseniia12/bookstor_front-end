import React, { useEffect, useMemo, useRef } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const FilterByAuthor = () => {
  const options = ["Price", "Name", "Author name", "Rating", "Date of issue"];
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { selected, setSelected, active, setActive } = useMultiselect([]);
  const filter = useAppSelector((state) => state.book.filters);
  const sort = filter.sort;
  const handleChange = (event: { target: { value: any } }) => {
    const selectedOption = event.target.value;
    setSelected([selectedOption]);
  };
  const navigate = useNavigate();

  const updateURL = () => {
    const params = new URLSearchParams(window.location.search);
    selected.forEach((option) => {
      const firstWord = option.split(" ")[0];
      params.set("sort", firstWord.toLowerCase());
    });
    navigate({ search: params.toString() });
  };

  useMemo(() => {
    updateURL();
  }, [selected]);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <StylesWrapper open={active} ref={popupRef}>
      <button className="title" onClick={() => setActive(!active)}>
        Sort by{" "}
        {selected.length ? selected[0].split(" ")[0].toLowerCase() : sort}
      </button>
      <img src={arrowToOpenForm} alt="Arrow to open form" className="img" />
      {active && (
        <ul className="menu">
          {options.map((option) => (
            <li key={option}>
              <label
                className={`label ${
                  selected.includes(option) ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={
                    sort === option.split(" ")[0].toUpperCase() ||
                    selected.includes(option)
                  }
                  onChange={handleChange}
                  className="input"
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </StylesWrapper>
  );
};

export default FilterByAuthor;

// import React, { useState, useEffect } from "react";
// import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
// import { StylesWrapper } from "./style";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../hooks";

// const FilterByAuthor = () => {
//   const filters = useAppSelector((state) => state.book.filters);
//   const [open, setOpen] = useState<boolean>(false);
//   const navigate = useNavigate();
//   const params = new URLSearchParams(window.location.search);
//   const initialSelectedOption = params.get("sort") || filters.sort;
//   const [selectedOption, setSelectedOption] = useState<string>(
//     initialSelectedOption
//   );

//   const changeStateForm = () => {
//     setOpen(!open);
//   };

//   const handleSelectChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setSelectedOption(event.target.value);
//   };

//   useEffect(() => {
//     if (selectedOption) {
//       params.set("sort", selectedOption);
//       navigate({ search: params.toString() });
//     }
//   }, [selectedOption, navigate]);

//   return (
//     <StylesWrapper open={open} onClick={changeStateForm}>

//         <div className="container">
//           <div>Sort by</div>
//           <select
//             className="container__select"
//             value={selectedOption}
//             onChange={handleSelectChange}
//           >
//             <option value="1">Price</option>
//             <option value="2">Name</option>
//             <option value="3">Author name</option>
//             <option value="4">Rating</option>
//             <option value="5">Date of issue</option>
//           </select>
//         </div>
//         <img src={arrowToOpenForm} alt="Arrow to open form" className="arrow" />

//     </StylesWrapper>
//   );
// };

// export default FilterByAuthor;
