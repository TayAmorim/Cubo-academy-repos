import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [userInEditing, setUserInEditing] = useState(false);
  const [clearForm, setClearForm] = useState(false);

  return (
    <UserContext.Provider
      value={{
        usersData,
        setUsersData,
        userInEditing,
        setUserInEditing,
        clearForm,
        setClearForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
