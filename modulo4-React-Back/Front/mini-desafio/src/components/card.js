import React from "react";
import "./card.css";

function cardMusic({ title, img, description, handleClick }) {
  return (
    <div onClick={handleClick} className="card">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default cardMusic;
