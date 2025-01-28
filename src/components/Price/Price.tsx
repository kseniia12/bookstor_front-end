import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { IProps } from "../Genre/Genre";

function valuetext(value: number) {
  return `${value}°C`;
}
const Price: React.FC<IProps> = (props) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(newValue)
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};
export default Price;
