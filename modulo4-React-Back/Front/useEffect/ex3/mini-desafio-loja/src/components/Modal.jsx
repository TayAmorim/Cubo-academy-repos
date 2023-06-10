import React, { useState, useEffect, showModal } from "react";
import IconClosedModal from "../assets/close-icon.svg";
import "./modal.css";

function Modal({ shoeClicked, SetShowModal }) {
  const [valueInstallments, setValueInstallments] = useState();
  useEffect(() => {
    setValueInstallments((shoeClicked.currentPrice / 6).toFixed(2));
  }, []);

  function handleClosedModal() {
    SetShowModal(false);
  }
  return (
    <section className="modal">
      <div className="wrapper-modal">
        <img
          onClick={handleClosedModal}
          className="icon-closed"
          src={IconClosedModal}
          alt="Incone de Fechar Modal"
        />

        <div className="img-shoe">
          <img src={shoeClicked.image} alt="img sapato" />
        </div>
        <h2 className="name-shoes">{shoeClicked.name}</h2>
        <p className="description-shoes">{shoeClicked.description}</p>
        <div className="wrapper-purchase">
          <button className="btn-buy">COMPRAR</button>
          <div className="product-value">
            <div className="value">
              <p className="oldPrice">R$ {shoeClicked.oldPrice}</p>
              <p className="currentPrice">R$ {shoeClicked.currentPrice}</p>
            </div>
            <div className="installments">
              <p className="installment">6x R$ {valueInstallments}</p>
              <p className="fees">Sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
