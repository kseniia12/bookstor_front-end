import React from "react";
import girlWithBook from "../../assets/girlWithBook.png";
import book from "../../assets/book.png";
import { StylesWrapper } from "./style";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <StylesWrapper>
      <div className="content">
        <div className="content__title">Build your library with us</div>
        <div className="content__subtitle">
          Buy two books and get one for free
        </div>
        <Button text="Choose a book" />
      </div>
      <img src={book} alt="Book" className="img-book" />
      <img src={girlWithBook} alt="Girl With Book" className="img-girl" />
    </StylesWrapper>
  );
};

export default Banner;
