import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/storage";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      return navigate("/main");
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
      setItem(token, token);
      navigate("/main");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChangeValueInpur}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChangeValueInpur}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default SingUp;
