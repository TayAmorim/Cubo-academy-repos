import { useState } from "react";
import "./App.css";

function Exercicio1() {
  const [text, setText] = useState("Olá");
  function handleText() {
    setText(`Olá mundo`);
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleText}>Mudar texto</button>
    </div>
  );
}

export default Exercicio1;
