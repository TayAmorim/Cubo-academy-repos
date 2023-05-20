import "./App.css";
import Lista from "../src/components/lista";

const items = [
  "Computador",
  "Mesa",
  "Mouse",
  "Tela LCD",
  "Cadeira Ergometrica",
  "Cafeteira",
];

function App() {
  return (
    <>
      <div>
        <h1>Lista de compras</h1>
        <ul>
          {items.map((item) => (
            <Lista key={1} produto={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
