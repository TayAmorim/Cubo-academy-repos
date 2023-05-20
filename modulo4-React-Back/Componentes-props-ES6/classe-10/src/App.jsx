import "./App.css";
import Carta from "../src/assets/components/carta";

// eslint-disable-next-line no-unused-vars
const mensage = [
  "Escrevo-te estas mal traçadas linhas, meu amor Porque veio a saudade visitar meu coração Espero que desculpes os meus erros, por favor",
];
const mensage2 = [
  "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.",
];
function App() {
  const carta = mensage2;
  return (
    <>
      <div>
        <Carta titulo="Te amo" mensage={carta} />
      </div>
    </>
  );
}

export default App;
