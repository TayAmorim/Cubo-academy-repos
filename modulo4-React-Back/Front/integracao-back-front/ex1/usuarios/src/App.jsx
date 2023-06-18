import { useEffect, useState } from "react";
import "./App.css";
import api from "./server/api";

function App() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const response = await api.post("/users", {
        ...form,
      });
      setUsers([...users, response]);
    } catch (error) {
      console.log(error.message);
    }
    handleClearValueInput();
  }

  useEffect(() => {
    getUsers();
  });

  function handleChangeValueInput({ target }) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }

  function handleClearValueInput() {
    setForm({ nome: "", email: "" });
  }

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmitForm}>
          <input
            className="form-input"
            name="nome"
            type="text"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChangeValueInput}
          />
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChangeValueInput}
          />
          <button className="btn-register">Cadastrar</button>
        </form>
        <div className="list-users">
          <h1>Users</h1>
          {users.map((user) => (
            <p key={user.nome}>{user.nome}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
