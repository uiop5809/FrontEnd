import { DefaultTheme } from "styled-components";

export const colors = {
  main: "#D33B4D",
  mainDark1: "#B51C2E",
  mainDark2: "#900717",
  mainLight1: "#ED6171",
  mainLight2: "#F88E9A",
  mainLight3: "#FBB5BD",
  mainLight4: "#FEDCE0",
  mainLight5: "#FFE8EB",
  mainLight6: "#FFEFF1",
  secondary: "#8195FF",
  black: "#252525",
  white: "#ffffff",
  greyTypeMain: "#B4B4B4",
  background: "#1A1A1A",
  grey05: "#5d5d5d",
  grey1: "#7f7f7f",
  grey2: "#B4B4B4",
  grey3: "#cecece",
  grey4: "#efefef",
  grey5: "#F4F4F4",
} as const;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ weight, size, lineHeight }: Font): string => `
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}%;
`;

const fonts = {
  heading1: FONT({
    weight: 700,
    size: 5.6,
    lineHeight: 160,
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
