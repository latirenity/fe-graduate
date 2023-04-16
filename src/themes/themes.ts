type ColorIndexType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type ColorPalleteType = {[index in ColorIndexType]: string};
interface ColorType {
  grey: ColorPalleteType,
  blue: ColorPalleteType,
  error: string
} 

export interface ThemesType {
  colors: ColorType
}

export const lightTheme: ThemesType = {
  colors: {
    grey: {
      0: "#fff",
      1: "#cccccc",
      2: "#999999",
      3: "#808080",
      4: "#4d4d4d",
      5: "#1a1a1a",
      6: "#000",
    },
    blue: {
      0: "#90e0ef",
      1: "#48cae4",
      2: "#00b4d8",
      3: "#0096c7",
      4: "#0077b6",
      5: "#023e8a",
      6: "#03045e",
    },
    error: "ba181b",
  },
};