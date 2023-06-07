import { useState } from "react";
import "./App.css";
import Modal from "../components/modal";
import Buton from "../components/button/buton";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Buton showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default App;
