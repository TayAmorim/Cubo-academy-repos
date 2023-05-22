import { useRef } from "react";
import "./App.css";

function App3() {
  const strongGreenRef = useRef(null);
  const strongRedRef = useRef(null);
  const strongPinkRef = useRef(null);

  function handleClickGreen() {
    strongGreenRef.current.style.color = "green";
    strongGreenRef.current.style.fontSize = "32px";
  }

  function handleClickPink() {
    strongPinkRef.current.style.color = "pink";
    strongPinkRef.current.style.fontSize = "32px";
  }

  function handleClickRed() {
    strongRedRef.current.style.color = "red";
    strongRedRef.current.style.fontSize = "32px";
  }
  return (
    <div className="App">
      <strong ref={strongGreenRef} onClick={handleClickGreen}>
        Daniel
      </strong>
      <strong ref={strongPinkRef} onClick={handleClickPink}>
        João
      </strong>
      <strong ref={strongRedRef} onClick={handleClickRed}>
        Pedro
      </strong>
    </div>
  );
}

export default App3;
