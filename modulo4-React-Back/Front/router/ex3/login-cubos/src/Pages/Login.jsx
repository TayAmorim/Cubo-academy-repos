import styles from "./Login.module.css";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, SetForm] = useState({
    nome: "",
    email: "",
  });
  const navigate = useNavigate();

  function handleChangeInput({ target }) {
    const { id, value } = target;
    SetForm({ ...form, [id]: value });
  }

  function handleLogin(event) {
    event.preventDefault();
    navigate("/teachers");
  }
  return (
    <div className={styles.login}>
      <div>
        <img src={Logo} alt="Logo Cubos Academy" />
      </div>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          id="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleChangeInput}
        />
        <input
          className={styles.input}
          type="email"
          id="email"
          value={form.email}
          placeholder="Password"
          onChange={handleChangeInput}
        />
        <p className={styles.text}>Não tem cadastro? Clique aqui!</p>
        <button className={styles.btnLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
