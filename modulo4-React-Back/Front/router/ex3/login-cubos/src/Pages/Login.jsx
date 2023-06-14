import styles from "./Login.module.css";
import Logo from "../assets/logo.png";
import { useState } from "react";

function Login() {
  const [form, SetForm] = useState({
    nome: "",
    email: "",
  });

  function handleChangeInput({ target }) {
    const { id, value } = target;
    SetForm({ ...form, [id]: value });
  }
  return (
    <div className={styles.login}>
      <img src={Logo} alt="Logo Cubos Academy" />
      <form className={styles.form}>
        <input
          type="text"
          id="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleChangeInput}
        />
        <input
          type="email"
          id="email"
          value={form.email}
          placeholder="email"
          onChange={handleChangeInput}
        />
        <p>Não tem cadastro? Clique aqui!</p>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
