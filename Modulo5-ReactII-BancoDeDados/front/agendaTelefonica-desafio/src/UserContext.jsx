/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { TOKEN_USER } from "../Api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function userLogin(userEmail, password) {
    try {
      const { url, options } = TOKEN_USER({
        email: userEmail,
        senha: password,
      });
      const tokenRes = await fetch(url, options);
      console.log(tokenRes);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <UserContext.Provider value={{ userLogin, data, error }}>
      {children}
    </UserContext.Provider>
  );
};
