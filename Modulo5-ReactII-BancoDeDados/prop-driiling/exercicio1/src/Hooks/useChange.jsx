import { useContext } from "react";
import { UserContext } from "../Context/userContext";

function useChange() {
  const {
    setUsersData,
    usersData,
    setClearForm,
    userInEditing,
    setUserInEditing,
  } = useContext(UserContext);

  async function handleRegisterUser(userName, userAge) {
    if (!userName || !userAge) {
      return;
    }

    const lastItem = usersData.length
      ? usersData[usersData.length - 1].id + 1
      : 1;

    setUsersData([
      ...usersData,
      { id: lastItem, name: userName, age: userAge },
    ]);
    setClearForm(true);
  }
  async function handleEditUser(userName, userAge) {
    const localUsersData = [...usersData];
    const currentUser = localUsersData.find(
      (item) => item.id === userInEditing.id
    );

    currentUser.name = userName;
    currentUser.age = userAge;

    setUsersData(localUsersData);
    setUserInEditing(false);
    setClearForm(true);
  }
  function handleDeleteUser(userId) {
    const localUsersData = [...usersData];
    console.log(usersData);
    const index = localUsersData.findIndex((item) => item.id === userId);

    localUsersData.splice(index, 1);

    setUsersData(localUsersData);
  }

  return { handleRegisterUser, handleEditUser, handleDeleteUser };
}

export default useChange;
