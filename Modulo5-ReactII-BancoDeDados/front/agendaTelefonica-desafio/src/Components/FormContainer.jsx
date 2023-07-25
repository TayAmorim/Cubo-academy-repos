/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

function FormContainer({ children, handleClickSubmit }) {
  return (
    <Stack
      onSubmit={handleClickSubmit}
      direction={{ xs: "row", sm: "column" }}
      spacing={{ xs: 1, sm: 2 }}
      component="form"
      noValidate
      autoComplete="off"
      sx={{ marginTop: "32px" }}
    >
      {children}
    </Stack>
  );
}

export default FormContainer;
