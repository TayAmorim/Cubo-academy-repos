import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/storage";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import styles from "./SingUp.module.css";

function SingUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      navigate("/main");
    }
  }, [navigate]);

  function handleChangeValueInpur({ target }) {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", {
        ...form,
      });
      const { token } = response.data;
      setItem("token", token);
      navigate("/main");
      console.log("oi");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChangeValueInpur}
        />
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChangeValueInpur}
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default SingUp;
