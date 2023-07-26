import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

const useForm = (type) => {
  const [value, setValue] = useState("");
  const { clearForm, userEdit, setUserEdit, setClearForm } =
    useContext(UserContext);

  useEffect(() => {
    if (clearForm) {
      setValue("");
      setClearForm(false);
    }
    if (userEdit) {
      if (type === "nome") {
        setValue(userEdit.nome);
      }
      if (type === "email") {
        setValue(userEdit.email);
      }
      if (type === "telefone") {
        setValue(userEdit.telefone);
      }
    }
  }, [clearForm, setClearForm, setUserEdit, type, userEdit]);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
};

export default useForm;
