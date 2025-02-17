import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useState } from "react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useMultiselect = (initialValue: string[]) => {
  const [selected, setSelected] = useState<string[]>(initialValue);
  const [active, setActive] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = selected.indexOf(value);
    setActive(!active);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };

  const isSelected = (value: string) => {
    return selected.includes(value);
  };

  return { selected, isSelected, onChange, active };
};
