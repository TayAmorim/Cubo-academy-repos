/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { TOKEN_USER, USER_POST } from "../Api";
import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [value, setValue, remove] = useLocalStorage("token");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      setError(error);
    }
  }

  async function registerUser(nome, email, senha) {
    try {
      const { url, options } = USER_POST({
        nome,
        email,
        senha,
      });
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) return setError(data);

      navigate("/");
    } catch (er) {
      setError(er);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, error, remove, value, registerUser, setError }}
    >
      {children}
    </UserContext.Provider>
  );
};
