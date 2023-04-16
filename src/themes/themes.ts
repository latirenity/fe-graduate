type ColorIndexType = 0 | 1 | 2 | 3;
type ColorPalleteType = {[index in ColorIndexType]: string};
interface ColorType {
  error: string,
  grey: ColorPalleteType,
  blue: ColorPalleteType,
  green: ColorPalleteType,
} 

export interface ThemesType {
  colors: ColorType
}

export const lightTheme: ThemesType = {
  colors: {
    error: "ba181b",
    grey: {
      0: "#fff",
      1: "#a3a3a2",
      2: "#595959",
      3: "#000",
    },
    blue: {
      0: "#67c1f5",
      1: "#305070",
      2: "#1b387d",
      3: "#171a21",
    },
    green: {
      0: "#d2efa9",
      1: "#beee11",
      2: "#5c7e10",
      3: "#4c6b22",
    },
  },
};