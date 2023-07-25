/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { CssTextField } from "./StyleComponents";
import FormContainer from "./FormContainer";
import { ButtonGroup } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import ButtonRed from "./ButtonRed";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 476,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h1" component="h2">
            Novo Contato
          </Typography>
          <FormContainer>
            <CssTextField id="nome" placeholder="Nome" />
            <CssTextField id="email" type="password" placeholder="Email" />
            <CssTextField id="telefone" type="tel" placeholder="Telefone" />
            <ButtonGroup
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ButtonGreen type="submit">CADASTRAR</ButtonGreen>
              <ButtonRed type="reset">CANCELAR</ButtonRed>
            </ButtonGroup>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
