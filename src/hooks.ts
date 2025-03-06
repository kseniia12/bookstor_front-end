import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useState } from "react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useMultiselect = (initialValue: string[]) => {
  const [selected, setSelected] = useState<string[]>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };

  return { onChange, selected };
};

export const useConverterObjectToArray = (
  selectorFn: (state: RootState) => unknown
) => {
  const nestedProperty = useSelector(selectorFn);
  if (typeof nestedProperty === "object" && nestedProperty !== null) {
    return Object.values(nestedProperty);
  }
  return [];
};
