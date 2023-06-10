import React from "react";
import "./modal.css";

function Modal() {
  return (
    <section className="modal">
      <div className="wrapper-modal">
        <div>
          <img src="" alt="img sapato" />
        </div>
        <h2 className="name-shoes">Nome do sapato</h2>
        <p className="description-shoes">
          Sofisticado e cheio de elegância, este sapato estilo Derby deixará o
          seu look impecável. Feito de couro, conta com design moderno, solado
          flexível e palmilha extra macia. Com muito bom gosto e charme, é o
          tipo de sapato masculino que se adapta a qualquer ocasião, desde as
          formais as mais casuais. Fica incrível se combinado com camisa social
          manga longa e calça de linho.{" "}
        </p>
        <div className="wrapper-purchase">
          <button className="btn-buy">COMPRAR</button>
          <div className="product-value">
            <div className="value">
              <p className="oldPrice">R$ 329,90</p>
              <p className="currentPrice">R$ 229,90</p>
            </div>
            <div className="installments">
              <p className="installment">6x R$ 38,31</p>
              <p className="fees">Sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
