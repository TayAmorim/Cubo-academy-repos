/* eslint-disable react/prop-types */
import { Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

theme.typography = {
  fontSize: "2.125rem",
};

function Subtitle({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">{children}</Typography>
    </ThemeProvider>
  );
}

export default Subtitle;
