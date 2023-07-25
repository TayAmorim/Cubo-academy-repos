/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonGreen({ children, ...props }) {
  return (
    <Button {...props} sx={{ background: "#04C45C" }} variant="contained">
      {children}
    </Button>
  );
}

export default ButtonGreen;
