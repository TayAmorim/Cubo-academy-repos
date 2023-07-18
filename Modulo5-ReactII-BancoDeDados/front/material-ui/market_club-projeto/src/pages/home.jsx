/* eslint-disable react-hooks/rules-of-hooks */
import Typography from "@mui/material/Typography";

import UseTheme from "../hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import Subtitle from "../components/Text/Subtitle";
import ButtonAdd from "../components/Button/ButtonAdd";
import CardProducts from "../components/CardProducts";
import ProductData from "../produtoData.json";
import { useNavigate } from "react-router-dom";

function home() {
  const home = UseTheme("font");
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/adicionar");
  }
  return (
    <ThemeProvider theme={home}>
      <Box
        sx={{ margin: "20px 85px 0 85px", borderBottom: "1px solid #BFBFBF" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sx={{ marginBottom: "3rem" }}>
              <Typography variant="h1">Market Cubos</Typography>
            </Grid>
            <Grid item xs={6}>
              <Subtitle>Seus produtos</Subtitle>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
              <ButtonAdd handleOnClick={handleOnClick} />
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={{ xs: 1 }}
          sx={{ justifyContent: "space-between" }}
        >
          {ProductData.map((product) => (
            <Grid item key={product.id}>
              <CardProducts {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default home;
