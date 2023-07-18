/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonAdd({ handleOnClick }) {
  return (
    <Button
      onClick={handleOnClick}
      variant="contained"
      sx={{ paddingBlock: "10px" }}
    >
      ADICIONAR PRODUTO
    </Button>
  );
}

export default ButtonAdd;
