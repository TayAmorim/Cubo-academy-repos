import React from "react";
import "./card.css";

function cardMusic({ title, img, description, handleClick }) {
  return (
    <div onClick={handleClick} className="card">
      <img src={img} alt="" />
      <div className="card-text">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default cardMusic;
