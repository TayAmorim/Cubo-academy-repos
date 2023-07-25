import { Box, Stack, Typography, Link } from "@mui/material";
import ImgLeft from "../../assets/img-left.jpg";
import { CssTextField } from "../../Components/StyleComponents";
import ButtonGreen from "../../Components/ButtonGreen";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleClickSubmit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ alignItems: "center" }}
      spacing={10}
    >
      <Box component="div">
        <img src={ImgLeft} alt="mulher com telefone" />
      </Box>
      <Stack sx={{ minWidth: "476px" }}>
        <Typography variant="subtitle1">Bem vindo</Typography>
        <Typography variant="h1">Faça o login com sua conta</Typography>
        <Stack
          direction={{ xs: "row", sm: "column" }}
          spacing={{ xs: 1, sm: 2 }}
          component="form"
          onSubmit={handleClickSubmit}
          noValidate
          autoComplete="off"
          sx={{ marginTop: "32px" }}
        >
          <CssTextField id="name" placeholder="Nome" size="medium" />
          <CssTextField
            sx={{ marginBottom: "40px" }}
            id="email"
            placeholder="Email"
          />
          <ButtonGreen type={SubmitEvent}>LOGIN</ButtonGreen>
        </Stack>
        <Typography textAlign="center" variant="body1" marginTop={4}>
          Não tem cadastro?{" "}
          <Link component="button" onClick={() => navigate("/sign-up")}>
            Clique aqui!
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Login;
