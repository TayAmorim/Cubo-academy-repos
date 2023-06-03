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
  const [messageErro, setMessageErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (form.email === "" || form.password === "") {
      return setMessageErro("Todos os inputs precisam estar preenchidos");
    }
    setMessageErro("");
    console.log(`Seja bem vindo ${form.email}`);
  }
  function getFormValues({ target }) {
    const newUpdta = target.name;
    const value = target.value;
    setForm({ ...form, [newUpdta]: value });
  }

  function showPassWords() {
    SetDisplayPassword(!displayPassword);
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
        <div className="wrapper-password">
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
        </div>
        {messageErro && <span className="erro">{messageErro}</span>}
        <button className="btn-send" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Main;
