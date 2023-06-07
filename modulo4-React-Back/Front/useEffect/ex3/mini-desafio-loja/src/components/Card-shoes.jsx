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
        <p>{oldPrice}</p>
        <p>{currentPrice}</p>
      </div>
    </div>
  );
};

export default CardShoes;
