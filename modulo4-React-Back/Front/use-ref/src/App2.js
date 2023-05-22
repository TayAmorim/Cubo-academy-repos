import { useRef, useEffect } from 'react';
import './App.css';

function App2() {
  const strongRef = useRef(null);
  const h1Ref = useRef(null);

  function handleClick() {
    if (h1Ref.current.style.backgroundColor === 'black') {
      h1Ref.current.style.backgroundColor = 'white';
      h1Ref.current.style.color = 'black';
      return;
    }

    h1Ref.current.style.backgroundColor = 'black';
    h1Ref.current.style.color = 'white';
  }

  useEffect(() => {
    strongRef.current.addEventListener("mouseover", () => {
      h1Ref.current.innerText = "Mouse no strong";
    });
  
    strongRef.current.addEventListener("mouseleave", () => {
      h1Ref.current.innerText = "Mouse fora do strong";
    });
  }, [])
 

  return (
    <div className="App">
      <strong
        ref={strongRef}
        onClick={() => handleClick()}
        // onMouseOver={() => handleMouseOver()}
        // onMouseLeave={() => handleMouseLeave()}
      >
        Passe o mouse aqui...
      </strong>
      <h1 ref={h1Ref}></h1>
    </div>
  );
}

export default App2;