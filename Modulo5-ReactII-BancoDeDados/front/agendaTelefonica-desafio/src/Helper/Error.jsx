/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

function Error({ error }) {
  if (!error) return null;
  return (
    <Typography sx={{ color: "red", textAlign: "center", marginTop: "10px" }}>
      {error}
    </Typography>
  );
}

export default Error;
