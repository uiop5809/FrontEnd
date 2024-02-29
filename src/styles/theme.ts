import { DefaultTheme } from "styled-components";

const colors = {
  main: "#D33B4D",
  mainDark1: "#B51C2E",
  mainDark2: "#900717",
  mainLight1: "#ED6171",
  mainLight2: "#F88E9A",
  mainLight3: "#FBB5BD",
  mainLight4: "#FEDCE0",
  mainLight5: "#FFE8EB",
  mainLight6: "#FFEFF1",
  black: "#252525",
  white: "#ffffff",
  greyTypeMain: "#B4B4B4",
} as const;

interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => `
    font-family : "${font}";
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}%;
`;

const fonts = {
  heading1: FONT({
    font: "Pretendard",
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
