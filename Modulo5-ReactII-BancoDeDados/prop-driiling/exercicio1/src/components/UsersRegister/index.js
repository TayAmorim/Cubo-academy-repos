import { useContext } from "react";
import "./styles.css";
import { UserContext } from "../../Context/userContext";
import useForm from "../../Hooks/useForm";

function UsersRegister() {
  const { usersData, setUsersData, userInEditing, setUserInEditing } =
    useContext(UserContext);
  const userName = useForm();
  const userAge = useForm();

  async function handleRegisterUser() {
    if (!userName.value || !userAge.value) {
      return;
    }

    const lastItem = usersData.length
      ? usersData[usersData.length - 1].id + 1
      : 1;

    setUsersData([
      ...usersData,
      { id: lastItem, name: userName.value, age: userAge.value },
    ]);

    userName.setValue("");
    userAge.setValue("");
  }

  async function handleEditUser() {
    if (!userName.value || !userAge.value) {
      return;
    }
    const localUsersData = [...usersData];

    const currentUser = localUsersData.find(
      (item) => item.id === userInEditing.id
    );

    console.log(currentUser);
    currentUser.name = userName.value;
    currentUser.age = userAge.value;

    setUsersData(localUsersData);
    setUserInEditing(false);
  }

  return (
    <div className="left">
      <h1>{userInEditing ? "Editando" : "Adicionar"} usuário</h1>
      <input type="text" placeholder="Name" {...userName} />
      <input type="number" placeholder="Age" {...userAge} />
      <button
        onClick={() =>
          userInEditing ? handleEditUser() : handleRegisterUser()
        }
      >
        {userInEditing ? "Editar" : "Adicionar"}
      </button>
      {userInEditing && (
        <button onClick={() => setUserInEditing(false)}>Cancelar</button>
      )}
    </div>
  );
}

export default UsersRegister;
