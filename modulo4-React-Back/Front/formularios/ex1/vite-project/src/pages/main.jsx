import { useState } from "react";
import "./main.css";
import CloseEye from "../assets/close-eye.svg";
import OpenEye from "../assets/open-eye.svg";

function Main() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [displayPassword, SetDisplayPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Seja bem vindo ${form.email}`);
  }
  function getFormValues({ target }) {
    const newUpdta = target.name;
    const value = target.value;
    setForm({ ...form, [newUpdta]: value });
  }

  function showPassWords() {
    SetDisplayPassword(!displayPassword);
    console.log(displayPassword);
  }

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form className="login" onSubmit={handleSubmit}>
        <input
          value={form.email}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={getFormValues}
        />
        <input
          type={displayPassword ? "tex" : "password"}
          name="password"
          placeholder="Senha"
          value={form.password}
          id="password"
          onChange={getFormValues}
        />
        <img
          className="password-icon"
          src={displayPassword ? OpenEye : CloseEye}
          alt="mostrar senha"
          onClick={showPassWords}
        />
        <button className="btn-send" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Main;
