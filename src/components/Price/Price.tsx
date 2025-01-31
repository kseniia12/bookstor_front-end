import * as React from "react";
import Slider from "@mui/material/Slider";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const Price = () => {
  const price = useAppSelector((state) => state.book.price);
  const [value, setValue] = React.useState<number[]>([price.minValue, price.maxValue]);
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);

  const handleChangeCommitted = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    setValue(newValue as number[]);
    if (value.length > 0) {
      params.set("min", value[0].toString());
      params.set("max", value[1].toString());
      navigate({ search: params.toString() });
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <StylesWrapper>
      <div className="wrapper">
        <Slider
          value={value}
          onChangeCommitted={handleChangeCommitted}
          onChange={handleChange}
          step={0.01}
          min={price.minValue}
          max={price.maxValue}
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
