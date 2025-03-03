import React from "react";
import arrowToOpenForm from "../../assets/arrowToOpenForm.png";
import { StylesWrapper } from "./style";

interface IPropsFilter {
  open: any;
  onClick: any;
  text: string;
}

const FilterButton: React.FC<IPropsFilter> = ({ open, onClick, text }) => {
  return (
    <StylesWrapper open={open} onClick={onClick}>
      <button className="title">{text}</button>
      <img src={arrowToOpenForm} alt="Arrow" className="img" />
    </StylesWrapper>
  );
};

export default FilterButton;
