import { ITheme } from "../interfaces/styled";

const getMediaQueryByMax = (width: number) => {
  return `@media screen and (max-width: ${width}px)`;
};

export const baseTheme: ITheme = {
  colors: {
    darkBlue: "#344966",
    dark: "#0D1821",
    light: "#F0F4EF",
    green: "#BFCC94",
    lightGrey: "#D6D8E7",
    darkGrey: "#B9BAC3",
    white: "#FFFFFF",
    darkGreen: "#8D9F4F",
    errorDefault: "#ED2E7E",
    errorDark: "#C30052",
    errorLight: "#FFF2F7",
  },
  media: {
    tablet: getMediaQueryByMax(1279),
    mobile: getMediaQueryByMax(789),
  },
};
