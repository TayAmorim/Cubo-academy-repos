import React from "react";
import "./modal.css";

function Modal() {
  return (
    <section className="modal">
      <div className="wrapper-modal">
        <div>
          <img src="" alt="img sapato" />
        </div>
        <h2>Nome do sapato</h2>
        <p>Descrição do sapato</p>
        <div className="wrapper-purchase">
          <button>Comprar</button>
          <div className="product-value">
            <div className="value">
              <p>R$ 329,90</p>
              <p>R$ 229,90</p>
            </div>
            <div className="installments">
              <p>6x R$ 38,31</p>
              <p>Sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
