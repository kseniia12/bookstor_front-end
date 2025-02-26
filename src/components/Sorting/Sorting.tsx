import React, { useEffect, useRef } from "react";
import { useAppSelector, useMultiselect } from "../../hooks";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

const FilterByAuthor = () => {
  const options = ["Price", "Name", "Author name", "Rating", "Date of issue"];
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { selected, setSelected, active, setActive } = useMultiselect([]);
  const filter = useAppSelector((state) => state.book.filters);
  const sort = filter ? filter.sort : "";
  const navigate = useNavigate();
  const location = useLocation()
  const handleChange = (event: { target: { value: any } }) => {
    const selectedOption = event.target.value;
    setSelected([selectedOption]);
  };
  
  useEffect(() => {
    const updateURL = () => {
      const params = new URLSearchParams(location.search);
      selected.forEach((option) => {
        const firstWord = option.split(" ")[0];
        params.set("sort", firstWord.toLowerCase());
      });
      navigate({ search: params.toString() });
    };

    updateURL();
  }, [selected, navigate]);

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
                  selected.includes(option) ||
                  (selected.length === 0 &&
                    option.split(" ")[0].toLowerCase() === sort)
                    ? "selected"
                    : ""
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
