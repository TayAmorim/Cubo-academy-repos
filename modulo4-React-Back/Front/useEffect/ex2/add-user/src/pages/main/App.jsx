import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([""]);
  const [inputValue, setInputValue] = useState("");
  const [message, setmessage] = useState(false);
  const countRef = useRef();

  function handleChangeInput({ target }) {
    setInputValue(target.value);
  }

  function handleClickUser() {
    setmessage(true);
    clearTimeout(countRef.current);
    setUsuarios([...usuarios, inputValue]);
    setInputValue("");
    countRef.current = setTimeout(() => {
      setmessage(false);
    }, 2000);
  }
  return (
    <>
      <div className="wrapper-main">
        <div className="sidebar left">
          <div className="wrapper-control">
            <input
              type="text"
              value={inputValue}
              onChange={handleChangeInput}
            />
            <button onClick={handleClickUser}>Adicionar</button>
          </div>
        </div>
        <div className="sidebar rigth">
          <h1>Usuários</h1>
          <div className="wrapper-user">
            {usuarios &&
              usuarios.map((usuario) => <p key={usuario}>{usuario}</p>)}
          </div>
        </div>
      </div>
      {message && <p className="message">Novo Usuário adicionado</p>}
    </>
  );
}

export default App;
