import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

const useForm = (type) => {
  const [value, setValue] = useState("");
  const { clearForm, userEdit, setUserEdit } = useContext(UserContext);

  useEffect(() => {
    if (!userEdit) {
      setValue("");
      return;
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
  }, [clearForm, setUserEdit, type, userEdit]);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
};

export default useForm;
