import { useContext } from "react";
import "./styles.css";
import { UserContext } from "../../Context/userContext";
import useForm from "../../Hooks/useForm";
import useChange from "../../Hooks/useChange";

function UsersRegister() {
  const { userInEditing, setUserInEditing } = useContext(UserContext);
  const userName = useForm("name");
  const userAge = useForm("age");
  const { handleRegisterUser, handleEditUser } = useChange();

  return (
    <div className="left">
      <h1>{userInEditing ? "Editando" : "Adicionar"} usuário</h1>
      <input type="text" placeholder="Name" {...userName} />
      <input type="number" placeholder="Age" {...userAge} />
      <button
        onClick={() =>
          userInEditing
            ? handleEditUser(userName.value, userAge.value)
            : handleRegisterUser(userName.value, userAge.value)
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
