import { Box, Stack, Typography } from "@mui/material";
import ImgLeft from "../../assets/img-left.jpg";
import { CssTextField } from "../../Components/CssTextField";

function Login() {
  return (
    <Stack
      direction="row"
      sx={{ padding: "0px", alignItems: "center" }}
      spacing={10}
    >
      <Box component="div">
        <img src={ImgLeft} alt="mulher com telefone" />
      </Box>
      <Box>
        <Typography variant="subtitle1">Bem vindo</Typography>
        <Typography variant="h1">Faça o login com sua conta</Typography>
        <Stack
          component="form"
          noValidate
          autoComplete="off"
          direction="column"
          spacing={1}
          sx={{ marginTop: "32px" }}
        >
          <CssTextField id="name" placeholder="Nome" />
          <CssTextField id="email" placeholder="Email" />
        </Stack>
      </Box>
    </Stack>
  );
}

export default Login;
