import React from "react";
import girlWithBook from "../../assets/girlWithBook.png";
import book from "../../assets/book.png";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <StylesWrapper>
      <div className="content">
        <div className="big-title">Build your library with us</div>
        <div className="normal-title content__description">
          Buy two books and get one for free
        </div>
        <Button text="Choose a book" />
      </div>
      <img src={book} alt="Book" className="img__book" />
      <img src={girlWithBook} alt="Girl With Book" className="img__girl" />
    </StylesWrapper>
  );
};

export default Banner;
