import { useState } from "react";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput({ target }) {
    setInputValue(target.value);
  }
  return (
    <div className="wrapper-main">
      <div className="sidebar left">
        <div className="wrapper-control">
          <input type="text" value={inputValue} onChange={handleChangeInput} />
          <button onClick={() => setUsuarios([...usuarios, inputValue])}>
            Adicionar
          </button>
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
  );
}

export default App;
