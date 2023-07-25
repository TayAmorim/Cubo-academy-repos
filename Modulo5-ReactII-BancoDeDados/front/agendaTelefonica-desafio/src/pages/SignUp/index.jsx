import { Box, Stack, Typography, Link, ButtonGroup } from "@mui/material";
import ButtonGreen from "../../Components/ButtonGreen";
import { CssTextField } from "../../Components/StyleComponents";
import { useNavigate } from "react-router-dom";
import ImgRight from "../../assets/img-right.png";
import ButtonRed from "../../Components/ButtonRed";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import useValidate from "../../Hooks/useValidate";
import Error from "../../Helper/Error";

function SignUp() {
  const userNome = useForm();
  const userEmail = useForm();
  const userSenha = useForm();
  const navigate = useNavigate();
  const { registerUser, error } = useContext(UserContext);
  const validateEmail = useValidate("email", userEmail.value);
  const validatePassword = useValidate("senha", userSenha.value);
  const validateNome = useValidate("nome", userNome.value);

  function handleClickSubmit(event) {
    event.preventDefault();
    if (
      validateEmail.validate() &&
      validateNome.validate() &&
      validatePassword.validate()
    ) {
      registerUser(userNome.value, userEmail.value, userSenha.value);
    }
  }

  return (
    <Stack
      direction={{ xs: "row", sm: "row-reverse" }}
      sx={{ alignItems: "center" }}
      spacing={10}
    >
      <Box component="div">
        <img src={ImgRight} alt="mulher com telefone" />
      </Box>
      <Stack sx={{ minWidth: "476px" }}>
        <Typography textAlign="center" variant="h1">
          Cadastre-se
        </Typography>
        <Stack
          onSubmit={handleClickSubmit}
          direction={{ xs: "row", sm: "column" }}
          spacing={{ xs: 1, sm: 2 }}
          component="form"
          noValidate
          autoComplete="off"
          sx={{ marginTop: "32px" }}
        >
          <CssTextField
            error={validateNome.error ? true : false}
            id="name"
            placeholder="Nome"
            helperText={validateNome.error ? validateNome.error : ""}
            {...userNome}
          />
          <CssTextField
            error={validateEmail.error ? true : false}
            id="email"
            placeholder="Email"
            helperText={validateEmail.error ? validateEmail.error : ""}
            {...userEmail}
          />
          <CssTextField
            error={validatePassword.error ? true : false}
            id="senha"
            type="password"
            placeholder="Senha"
            helperText={validatePassword.error ? validatePassword.error : ""}
            {...userSenha}
          />
          <ButtonGroup
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <ButtonGreen type="submit">LOGIN</ButtonGreen>
            <ButtonRed type="reset">CANCELAR</ButtonRed>
          </ButtonGroup>
        </Stack>
        {error && <Error error={error} />}
        <Typography textAlign="center" variant="body1" marginTop={4}>
          Já tem cadastro?{" "}
          <Link component="button" onClick={() => navigate("/")}>
            Clique aqui!
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SignUp;
