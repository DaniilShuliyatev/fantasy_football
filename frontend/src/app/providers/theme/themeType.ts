import type { theme } from "./theme";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: Palette["primary"];
  }
  interface PaletteOptions {
    customColors?: PaletteOptions["primary"];
  }
}

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
