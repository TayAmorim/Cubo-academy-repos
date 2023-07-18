/* eslint-disable react/prop-types */
import { Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "2.125rem",
  fontWeight: "normal",
};

function Subtitle({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">{children}</Typography>
    </ThemeProvider>
  );
}

export default Subtitle;
