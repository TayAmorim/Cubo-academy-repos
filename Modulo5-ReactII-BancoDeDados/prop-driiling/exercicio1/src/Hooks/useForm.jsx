import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/userContext";

function useForm(type) {
  const [value, setValue] = useState("");
  const { clearForm, userInEditing, setClearForm } = useContext(UserContext);

  useEffect(() => {
    if (clearForm) {
      setValue("");
      setClearForm(false);
    }
    if (userInEditing) {
      if (type === "name") {
        setValue(userInEditing.name);
      }
      if (type === "age") {
        setValue(userInEditing.age);
      }
    }
  }, [clearForm, userInEditing, type, setClearForm]);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
}

export default useForm;
