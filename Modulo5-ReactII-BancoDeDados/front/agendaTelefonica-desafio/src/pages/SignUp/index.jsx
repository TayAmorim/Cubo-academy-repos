import { Box, Stack, Typography, Link, ButtonGroup } from "@mui/material";
import ButtonGreen from "../../Components/ButtonGreen";
import { CssTextField } from "../../Components/StyleComponents";
import { useNavigate } from "react-router-dom";
import ImgRight from "../../assets/img-right.png";
import ButtonRed from "../../Components/ButtonRed";

function SignUp() {
  const navigate = useNavigate();

  function handleClickSubmit(event) {
    event.preventDefault();
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
          <CssTextField id="name" placeholder="Nome" size="medium" />
          <CssTextField id="email" placeholder="Email" />
          <CssTextField id="senha" placeholder="Senha" />
          <ButtonGroup
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <ButtonGreen type="submit">LOGIN</ButtonGreen>
            <ButtonRed type="reset">CANCELAR</ButtonRed>
          </ButtonGroup>
        </Stack>
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
