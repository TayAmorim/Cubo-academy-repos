/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonGreen from "./ButtonGreen";
import ButtonRed from "./ButtonRed";
import { Stack } from "@mui/material";
import useFetch from "../Hooks/useFetch";
import { CONTACT_DELETE } from "../../Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 476,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function ModalDelete({
  openModalDelete,
  setOpenModalDelete,
  contactDelete,
  setShouldFetchNewData,
  value,
}) {
  const { request } = useFetch();
  function handleClose() {
    setOpenModalDelete(false);
  }

  async function handleDeleteContact() {
    const { url, options } = CONTACT_DELETE(contactDelete.id, value);
    await request(url, options);
    setShouldFetchNewData(true);
    setOpenModalDelete(false);
  }

  return (
    <div>
      <Modal
        open={openModalDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comfirma a exclusão?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Deseja excluir o contato, {contactDelete ? contactDelete.nome : ""}{" "}
            ?
          </Typography>
          <Stack spacing={2} marginTop={4}>
            <ButtonGreen onClick={handleDeleteContact}>EXCLUIR</ButtonGreen>
            <ButtonRed onClick={handleClose}>Cancelar</ButtonRed>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
