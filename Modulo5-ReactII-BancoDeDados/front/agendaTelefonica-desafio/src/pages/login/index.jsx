import { Box, Stack, Typography, Link } from "@mui/material";
import ImgLeft from "../../assets/img-left.jpg";
import { CssTextField } from "../../Components/StyleComponents";
import ButtonGreen from "../../Components/ButtonGreen";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import useValidate from "../../Hooks/useValidate";

function Login() {
  const userEmail = useForm();
  const userSenha = useForm();
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);
  const validateEmail = useValidate("email", userEmail.value);
  const validatePassword = useValidate("senha", userSenha.value);
  async function handleClickSubmit(event) {
    event.preventDefault();

    if (validateEmail.validate() && validatePassword.validate()) {
      userLogin(userEmail.value, userSenha.value);
    }

    //navigate("/home");
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
          <CssTextField
            error={validateEmail.error ? true : false}
            id="name"
            placeholder="Nome"
            helperText={validateEmail.error ? validateEmail.error : ""}
            {...userEmail}
          />
          <CssTextField
            error={validatePassword.error ? true : false}
            id="email"
            type="password"
            placeholder="Senha"
            helperText={validatePassword.error ? validatePassword.error : ""}
            {...userSenha}
          />
          <ButtonGreen type="submit">LOGIN</ButtonGreen>
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
