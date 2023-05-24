import "./App.css";
import Card from "./components/card";
import Cokkies from "./assets/emojione_cookie.png";
import Alert from "./assets/frame.png";

function App() {
  return (
    <div>
      <Card
        img={Cokkies}
        text="Nós utilizamos cookies para melhorar nossa UX, analytics e marketing."
        textButton="Tudo bem!"
        colorButton="red"
      />
      <Card
        img={Alert}
        text="Você será deslogado imediatamente!"
        textButton="Extender login"
        colorButton="purple"
      />
    </div>
  );
}

export default App;
