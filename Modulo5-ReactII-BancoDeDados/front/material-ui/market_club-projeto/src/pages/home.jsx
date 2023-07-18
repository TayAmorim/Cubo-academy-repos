import Typography from "@mui/material/Typography";

import UseTheme from "../hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import Subtitle from "../components/Text/Subtitle";

function home() {
  const home = UseTheme("font");
  return (
    <ThemeProvider theme={home}>
      <Box sx={{ flexGrow: 1, margin: "20px 0 0 40px" }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1">Market Cubos</Typography>
          </Grid>
          <Grid item xs={6}>
            <Subtitle>Seus produtos</Subtitle>
          </Grid>
          <Grid item xs={6}>
            <Subtitle>Seus produtos</Subtitle>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default home;
