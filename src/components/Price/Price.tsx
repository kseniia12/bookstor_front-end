import * as React from "react";
import Slider from "@mui/material/Slider";
import { StylesWrapper } from "./style";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { IPrice } from "../../lib/types/types";

const Price = () => {
  const price = useAppSelector((state) => state.book.price) as IPrice;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMin = Number(searchParams.get("min")) ?? price.minValue;
  const initialMax = Number(searchParams.get("max")) ?? price.maxValue;
  const [value, setValue] = React.useState<number[]>([initialMin, initialMax]);

  const handleChangeCommitted = (_: any, newValue: number | number[]) => {
    const newValues = newValue as number[];
    setValue(newValues);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("min", newValues[0].toString());
    newParams.set("max", newValues[1].toString());
    setSearchParams(newParams);
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
