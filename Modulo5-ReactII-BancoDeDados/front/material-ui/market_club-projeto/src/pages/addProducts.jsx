import Typography from "@mui/material/Typography";
import UseTheme from "../hooks/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Subtitle from "../components/Text/Subtitle";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AddProducts() {
  const home = UseTheme("font");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("oi");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
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
                <TextField
                  id="standard-basic"
                  label="Preço"
                  variant="standard"
                />
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
      <ButtonGroup
        aria-label="outlined primary button group"
        sx={{ margin: "30px 85px" }}
      >
        <Button
          variant="text"
          sx={{ textDecoration: "underline", marginRight: "30px" }}
        >
          CANCELAR
        </Button>
        <Button variant="contained" onClick={handleClick}>
          ADICIONAR PRODUTO
        </Button>
      </ButtonGroup>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Produto Adicionado com Sucesso!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default AddProducts;
