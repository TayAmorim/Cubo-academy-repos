/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { CssTextField } from "./StyleComponents";
import FormContainer from "./FormContainer";
import { ButtonGroup } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import ButtonRed from "./ButtonRed";
import useFetch from "../Hooks/useFetch";
import useForm from "../Hooks/useForm";
import { CONTACT_POST } from "../../Api";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import useValidate from "../Hooks/useValidate";

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

export default function KeepMountedModal({
  open,
  setOpen,
  setShouldFetchNewData,
}) {
  const { request } = useFetch();
  const contactName = useForm("nome");
  const contactEmail = useForm("email");
  const contactTel = useForm("telefone");
  const validateEmail = useValidate("email", contactEmail.value);
  const validateName = useValidate("name", contactName.value);
  const validateTel = useValidate("telefone", contactTel.value);
  const { value, userEdit } = useContext(UserContext);
  const handleClose = () => setOpen(false);

  function handleAddContact(event) {
    event.preventDefault();

    if (
      validateEmail.validate() &&
      validateName.validate() &&
      validateTel.validate()
    ) {
      const newContact = {
        nome: contactName.value,
        email: contactEmail.value,
        telefone: contactTel.value,
      };
      const { url, options } = CONTACT_POST(value, newContact);
      request(url, options);
      setShouldFetchNewData(true);
    }
  }

  function handleEditContact(event) {
    event.preventDefault();
    console.log(userEdit);
  }

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
          <Typography
            id="keep-mounted-modal-title"
            variant="h1"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Novo Contato
          </Typography>
          <FormContainer
            handleClickSubmit={userEdit ? handleEditContact : handleAddContact}
          >
            <CssTextField
              error={validateName.error ? true : false}
              id="nome"
              placeholder="Nome"
              helperText={validateName.error ? validateName.error : ""}
              {...contactName}
            />
            <CssTextField
              error={validateEmail.error ? true : false}
              id="email"
              type="email"
              placeholder="Email"
              helperText={validateEmail.error ? validateEmail.error : ""}
              {...contactEmail}
            />
            <CssTextField
              error={validateTel.error ? true : false}
              id="telefone"
              type="tel"
              placeholder="Telefone"
              helperText={validateTel.error ? validateTel.error : ""}
              {...contactTel}
            />
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
