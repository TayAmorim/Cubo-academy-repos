import styled from "@emotion/styled";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Container = styled(Stack)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  marginInline: "20px",
  justifyContent: "center",
});

function App() {
  const [listAnimals, setListAnimals] = useState([]);
  const [animal, setAnimal] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setListAnimals([...listAnimals, animal]);
    setAnimal("");
  }

  function handleClickDelet(indexAnimal) {
    const nweListAnimals = listAnimals.filter(
      (_, index) => index != indexAnimal
    );
    setListAnimals(nweListAnimals);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Animal"
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
              />
              <Button type="submit" variant="contained">
                Adicionar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Box>
            {listAnimals &&
              listAnimals.map((animal, index) => (
                <Stack
                  direction="row"
                  spacing={2}
                  key={index}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>{animal}</Typography>
                  <IconButton
                    onClick={() => handleClickDelet(index)}
                    aria-label="delete"
                    color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
