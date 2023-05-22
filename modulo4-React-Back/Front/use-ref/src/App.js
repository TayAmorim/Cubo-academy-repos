import { useRef } from "react";
import "./App.css";

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);
  const spanRef = useRef(0);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef");
  console.log(count, "count");

  function handleIncrementRef() {
    countRef.current += 1;
    console.log("Valor de countRef", countRef.current);
  }

  function handleincrementLet() {
    count += 1;
    spanRef.current.innerText = count;
    console.log("Valor de count", count);
  }

  return (
    <div className="App">
      <button ref={incrementRef} onClick={handleIncrementRef}>
        Increment ref
      </button>
      <button ref={incrementLet} onClick={handleincrementLet}>
        Increment let
      </button>
      <span ref={spanRef}>{countRef.current}</span>
    </div>
  );
}

export default App;
