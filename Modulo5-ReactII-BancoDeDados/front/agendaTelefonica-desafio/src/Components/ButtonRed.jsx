/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonRed({ children, type, onClick }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      sx={{ background: "rgb(251, 6, 21, 65%);" }}
      variant="contained"
    >
      {children}
    </Button>
  );
}

export default ButtonRed;
