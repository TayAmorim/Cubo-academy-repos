/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { TOKEN_USER } from "../Api";
import { useLocalStorage } from "react-use";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [value, setValue, remove] = useLocalStorage("token");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function userLogin(userEmail, password) {
    try {
      const { url, options } = TOKEN_USER({
        email: userEmail,
        senha: password,
      });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { usuario, token } = await response.json();
      setValue(token);
      setData(usuario);
    } catch (error) {
      setError(error.message);
    }
  }
  console.log(data);
  return (
    <UserContext.Provider value={{ userLogin, data, error, remove, value }}>
      {children}
    </UserContext.Provider>
  );
};
