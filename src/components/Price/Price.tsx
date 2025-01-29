import * as React from "react";
import Slider from "@mui/material/Slider";

import { StylesWrapper } from "./style";



const Price = () => {
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <StylesWrapper>
      <div className="wrapper">
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
      />
      <div className="price">
      <p className="minPrice">{`$ ${value[0]}`}</p>
      <p className="maxPrice">{`$ ${value[1]}`}</p>
      </div>
      </div>
     
      
     
    </StylesWrapper>
  );
};
export default Price;
