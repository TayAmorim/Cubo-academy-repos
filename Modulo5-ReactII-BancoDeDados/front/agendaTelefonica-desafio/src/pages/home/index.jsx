/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ResponsiveAppBar from "../../Components/ResponsiveAppBar";
import useFetch from "../../Hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { CONTACT_GET } from "../../../Api";
import Modal from "../../Components/Modal";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function home() {
  const { data, request } = useFetch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { value, setUserEdit } = useContext(UserContext);
  const [shouldFetchNewData, setShouldFetchNewData] = useState(true);

  useEffect(() => {
    if (!shouldFetchNewData) return;
    const { url, options } = CONTACT_GET(value);
    request(url, options);
    setShouldFetchNewData(false);
  }, [value, request, shouldFetchNewData]);

  function handleOpenModalContact(contact) {
    setOpen(true);
    setUserEdit(contact);
  }

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{ marginTop: "8rem" }}>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{ minWidth: "14.6875rem", backgroundColor: "#04C45C" }}
        >
          Adicionar
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 956 }}>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell component="th" scope="row">
                      {contact.nome}
                    </TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.telefone}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleOpenModalContact(contact)}
                      >
                        <ModeEditOutlineOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Modal
        shouldFetchNewData={shouldFetchNewData}
        setShouldFetchNewData={setShouldFetchNewData}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default home;
