import React, { useState } from "react";
import { StylesWrapper } from "./style";
import Rectangle from "../../img/Rectangle 1.png";

import Button from "../Button/Button";
import RatingBook from "../RatingBook/RatingBook";

const Book = () => {
  const [favorites, setFavorites] = useState<boolean>(false);


  const AddOrRemoveFavorites = () => {
    setFavorites(!favorites)
  }

  return (
    <StylesWrapper src={favorites}>
      <div className="book">
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img src={Rectangle} alt="Book" />
      </div>
      <div>
        <div className="genre">The Chronicles of Narnia</div>
        <div className="author">C. S. Lewis</div>
      </div>
      <div>
        <RatingBook />
        <Button className="button" text={"USD"} />
      </div>
    </StylesWrapper>
  );
};

export default Book;
