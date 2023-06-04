/* eslint-disable react/prop-types */
import "./form.css";
import { useState } from "react";
import OpenEye from "../../assets/open-eye.svg";
import CloseEye from "../../assets/close-eye.svg";

function Form({ setRegistration }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [mensageErro, setMensageErro] = useState("");
  const [iconPassworld, SetIconPassworld] = useState(false);

  function inputChange({ target }) {
    const update = target.name;
    const value = target.value;
    setForm({ ...form, [update]: value });
  }

  function handleChangeForm(event) {
    event.preventDefault();

    setMensageErro("");
    const keysForm = Object.keys(form);
    const inputsInvalid = keysForm.filter((key) => {
      return form[key] === "";
    });
    if (inputsInvalid.length === 0) {
      setMensageErro("");
      return setRegistration(true);
    }
    if (inputsInvalid.length === keysForm.length) {
      return setMensageErro("Todos os campos precisam estar preenchidos");
    }
    if (inputsInvalid.length === 1) {
      return setMensageErro(`O campo ${inputsInvalid} precisa esta preenchido`);
    }
    console.log(inputsInvalid);
    if (inputsInvalid.length < keysForm.length) {
      const inputEmpety = inputsInvalid.join(", ");
      return setMensageErro(
        `Os campos ${inputEmpety} precisam estar preenchidos`
      );
    }
  }

  function showPassworld() {
    SetIconPassworld(!iconPassworld);
  }

  function clearForm() {
    setForm({
      name: "",
      email: "",
      password: "",
    });
    setMensageErro("");
  }
  return (
    <div className="form-wrapper">
      <h1>Cadastre-se</h1>
      <form onSubmit={handleChangeForm} className="form-login">
        <input
          onChange={inputChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={inputChange}
          value={form.email}
        />
        <div className="wrapper-password">
          <input
            id="password"
            type={iconPassworld ? "text" : "password"}
            name="password"
            placeholder="Senha"
            onChange={inputChange}
            value={form.password}
          />
          <img
            onClick={showPassworld}
            src={iconPassworld ? OpenEye : CloseEye}
            alt="Icone de mostrar a senha"
          />
        </div>
        {mensageErro && <span className="erro">{mensageErro}</span>}
        <button className="btn send" type="submit">
          CADASTRAR
        </button>
        <button onClick={clearForm} className="btn cancel" type="button">
          CANCELAR
        </button>
      </form>
      <p>Já tem cadastro? Clique aqui!</p>
    </div>
  );
}

export default Form;
