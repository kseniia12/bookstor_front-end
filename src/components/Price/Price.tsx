import * as React from "react";
import Slider from "@mui/material/Slider";

import { StylesWrapper } from "./style";

import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Price = () => {
  const [value, setValue] = React.useState<number[]>([0, 100]);
  const navigate = useNavigate();

  const handleChangeCommitted = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // useMemo(() => {
  //   if (value.length > 0) {
  //     const params = new URLSearchParams(window.location.search);
  //     value.map((val) => {
  //       params.append("sort", val.toString());
  //     });
  //     navigate({ search: params.toString() });
  //   }
  // }, [value[0]]);

  const memoizedValue = React.useMemo(() => value, [value]);
  
console.log(memoizedValue)
  return (
    <StylesWrapper>
      <div className="wrapper">
        <Slider value={value} onChangeCommitted={handleChangeCommitted} />
        <div className="price">
          <p className="minPrice">{`$ ${value[0]}`}</p>
          <p className="maxPrice">{`$ ${value[1]}`}</p>
        </div>
      </div>
    </StylesWrapper>
  );
};
export default Price;
