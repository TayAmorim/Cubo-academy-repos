import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/userContext";

function useForm() {
  const [value, setValue] = useState("");
  const { userInEditing } = useContext(UserContext);

  useEffect(() => {
    if (userInEditing) {
      return;
    }
    setValue("");
  }, [userInEditing]);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}

export default useForm;
