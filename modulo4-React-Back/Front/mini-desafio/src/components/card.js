import React from "react";
import "./card.css";

function cardMusic({ title, img, description, click }) {
  return (
    <div onClick={click} className="card">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default cardMusic;
