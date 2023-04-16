import "styled-components";
import { ThemesType } from "./themes/themes";

declare module "styled-components" {
  export interface DefaultTheme extends ThemesType {}
}