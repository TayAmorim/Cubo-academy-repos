/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function ButtonRed({ children, ...props }) {
  return (
    <Button
      {...props}
      sx={{ background: "rgb(251, 6, 21, 65%);" }}
      variant="contained"
    >
      {children}
    </Button>
  );
}

export default ButtonRed;
