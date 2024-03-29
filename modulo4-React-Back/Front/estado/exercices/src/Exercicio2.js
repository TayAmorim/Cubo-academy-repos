import { useState } from "react";
import "./App.css";

function Exercicio2() {
  const listaFrutas = ["uva", "maça", "banana", "melão", "mamão"];
  const [frutas, setFrutas] = useState(listaFrutas);
  function addfruta() {
    setFrutas([...frutas, "goiaba"]);
  }

  return (
    <div>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
      <button onClick={addfruta}>Adicionar</button>
    </div>
  );
}

export default Exercicio2;
