import { useState } from "react";
import "./App.css";

function Exercicio3() {
  const [animais, setAnimais] = useState([
    { id: 1, nome: "Cachorro", especie: "mamifero" },
    { id: 2, nome: "Cobra", especie: "reptéis" },
    { id: 3, nome: "Gato", especie: "mamífero" },
  ]);
  function addAnimal() {
    setAnimais([
      ...animais,
      { id: animais.length + 1, nome: "Rato", especie: "Roedor" },
    ]);
  }
  function alterarAnimal() {
    setAnimais(
      animais.map((animal) => {
        if (animal.id === 2) {
          return { ...animal, especie: "nada" };
        }
        return { ...animal };
      })
    );
  }
  function deletarAnimal() {
    const animalFilter = animais.filter((animal) => {
      return animal.id < animais.length;
    });
    setAnimais(animalFilter);
  }

  return (
    <div>
      <h1>Animais</h1>
      {animais.map(({ nome, especie, id }) => (
        <p key={id}>
          {nome} {especie}
        </p>
      ))}
      <button onClick={addAnimal} style={{ marginLeft: "10px" }}>
        Adicionar
      </button>
      <button onClick={alterarAnimal} style={{ marginLeft: "10px" }}>
        Alterar
      </button>
      <button onClick={deletarAnimal} style={{ marginLeft: "10px" }}>
        Deletar
      </button>
    </div>
  );
}

export default Exercicio3;
