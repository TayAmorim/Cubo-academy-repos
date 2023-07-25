import { Button, Container } from "@mui/material";
import ResponsiveAppBar from "../../Components/ResponsiveAppBar";

function home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{ marginTop: "8rem" }}>
        <Button
          variant="contained"
          sx={{ minWidth: "14.6875rem", backgroundColor: "#04C45C" }}
        >
          Adicionar
        </Button>
      </Container>
    </>
  );
}

export default home;
