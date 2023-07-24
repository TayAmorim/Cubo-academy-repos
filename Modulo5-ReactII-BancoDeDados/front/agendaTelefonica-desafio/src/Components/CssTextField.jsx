import { TextField, styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: "#FDFAFA",
    border: "1px solid #FDFAFA",
    fontSize: 16,
  },
});
