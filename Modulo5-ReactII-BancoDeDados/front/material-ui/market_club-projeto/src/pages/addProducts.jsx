import Typography from "@mui/material/Typography";
import UseTheme from "../hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, TextField } from "@mui/material";
import Subtitle from "../components/Text/Subtitle";

function AddProducts() {
  const home = UseTheme("font");
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
              <Subtitle>Adicionar produtos</Subtitle>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="form"
          sx={{ flexGrow: 1, marginTop: "40px", marginBottom: "130px" }}
          noValidate
          autoComplete="off"
        >
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "392px" }}
                id="standard-basic"
                label="Nome do produto"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Preço" variant="standard" />
              <TextField
                sx={{ marginLeft: "24px" }}
                id="standard-basic"
                label="Estoque"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "392px" }}
                id="standard-basic"
                label="Descrição do produto"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "392px" }}
                id="standard-basic"
                label="Imagem"
                variant="standard"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AddProducts;
