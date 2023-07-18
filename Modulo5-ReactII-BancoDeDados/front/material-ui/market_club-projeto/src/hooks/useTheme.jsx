import { createTheme } from "@mui/material/styles";

function useTheme(font) {
  font = createTheme();
  font.typography = {
    fontFamily: "Roboto",
  };
  font.typography.h1 = {
    fontSize: "48px",
  };

  return font;
}

export default useTheme;
