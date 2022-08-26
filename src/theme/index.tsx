import { transparentize } from "polished";
import { useMemo } from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme,
} from "styled-components";
import { useIsDarkMode } from "../state/user/hooks";
import { Colors } from "./styled";
const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = "#FFFFFF";
const black = "#000000";

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? "#FFFFFF" : "#000000",
    text2: darkMode ? "#C3C5CB" : "#565A69",
    text3: darkMode ? "#6C7284" : "#888D9B",
    text4: darkMode ? "#565A69" : "#C3C5CB",
    text5: darkMode ? "#2C2F36" : "#EDEEF2",

    // backgrounds / greys
    bg1: darkMode ? "#212429" : "#FFFFFF",
    bg2: darkMode ? "#2C2F36" : "#F7F8FA",
    bg3: darkMode ? "#40444F" : "#EDEEF2",
    bg4: darkMode ? "#565A69" : "#CED0D9",
    bg5: darkMode ? "#6C7284" : "#888D9B",

    //specialty colors
    modalBG: darkMode ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
    advancedBG: darkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",

    //primary colors
    primary1: darkMode ? "#2172E5" : "#2938D0",
    primary2: darkMode ? "#3680E7" : "#3b48cf",
    primary3: darkMode ? "#4D8FEA" : "#555fca",
    primary4: darkMode ? "#376bad70" : "#6870c870",
    primary5: darkMode ? "#153d6f70" : "#787ec570",

    // color text
    primaryText1: darkMode ? "#6da8ff" : "#2938D0",

    // secondary colors
    secondary1: darkMode ? "#2172E5" : "#3b48cf",
    secondary2: darkMode ? "#17000b26" : "#555fca",
    secondary3: darkMode ? "#17000b26" : "#6870c8",

    // other
    red1: "#FF6871",
    red2: "#F82D3A",
    green1: "#27AE60",
    yellow1: "#FFE270",
    yellow2: "#F3841E",
    yellow3: "#fbac29",

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  };
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },
    //shadows
    shadow1: darkMode ? "#000" : "#2938D0",

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useIsDarkMode();
  const themeObject = useMemo(() => theme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.018em;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`;
export const ThemedGlobalStyle = createGlobalStyle`

html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: 100vh;
  /* background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `radial-gradient(50% 50% at 50% 50%, ${theme.primary1} 0%, ${
      theme.bg1
    } 100%)`}; */
}
html,body,#root {
  width: 100%;
  height: 100%;
}
`;
