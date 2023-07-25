/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Container } from "@mui/material";
import ResponsiveAppBar from "../../Components/ResponsiveAppBar";
import useFetch from "../../Hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { CONTACT_GET } from "../../../Api";
import Modal from "../../Components/Modal";

function home() {
  const { data, request } = useFetch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { value } = useContext(UserContext);

  useEffect(() => {
    const { url, options } = CONTACT_GET(value);
    request(url, options);
  }, [value, request]);

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
        {data && data.map((data) => <p key={data}>{data}</p>)}
      </Container>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

export default home;
