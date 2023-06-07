/* eslint-disable react/prop-types */
import "./modal.css";

function Modal({ showModal, setShowModal }) {
  if (showModal === true) {
    return (
      <div className="modal">
        <h1>Users</h1>
        <p>Tayanna</p>
        <p>Tayanna</p>
        <p>Tayanna</p>
        <p>Tayanna</p>
        <div>
          <button onClick={() => setShowModal(false)}>Fechar</button>
        </div>
      </div>
    );
  }
}

export default Modal;
