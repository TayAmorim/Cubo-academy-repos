import React from "react";
import "./shoes.css";

const CardShoes = ({ image, name, oldPrice, currentPrice }) => {
  return (
    <div className="wrapper-card-shoes">
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div className="wrapper-preco">
        <p className="oldPrice">R$ {oldPrice}</p>
        <p className="currentPrice">R$ {currentPrice}</p>
      </div>
      <div className="installment-mode">
        <p className="installment">6x R$ 38,31</p>
        <p className="fees">Sem juros</p>
      </div>
    </div>
  );
};

export default CardShoes;
