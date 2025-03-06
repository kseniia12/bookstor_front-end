import React from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";

interface IPropsFilter {
  onClick: () => void;
  text: string;
  className: string;
  isOpen: boolean;
}

const FilterButton: React.FC<IPropsFilter> = ({
  onClick,
  text,
  className,
  isOpen,
}) => {
  return (
    <StylesWrapper onClick={onClick} className={className}>
      <span className="title">{text}</span>
      <img
        src={arrowToOpenForm}
        alt="Arrow"
        className={`arrow ${isOpen ? "active" : ""}`}
      />
    </StylesWrapper>
  );
};

export default FilterButton;
