import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useMultiselect = (initialValue: string[]) => {
  const [selected, setSelected] = useState<string[]>(initialValue);
  const [active, setActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    selected.forEach((item) => {
      if (searchParams.get("genre") === item) {
        searchParams.delete("genre");
      }
      searchParams.append("genre", item);
    });

    setSearchParams(searchParams);
  }, [selected]);

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
