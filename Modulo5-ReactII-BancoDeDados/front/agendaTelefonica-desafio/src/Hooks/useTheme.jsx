import { createTheme } from "@mui/material/styles";

function useTheme(font) {
  font = createTheme();
  font.typography.h1 = {
    fontSize: "42px",
  };
  return font;
}

export default useTheme;
