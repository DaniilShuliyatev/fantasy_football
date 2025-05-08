declare module "@mui/material/styles" {
  interface Palette {
    customColors: Palette["primary"];
  }
  interface PaletteOptions {
    customColors?: PaletteOptions["primary"];
  }
}
