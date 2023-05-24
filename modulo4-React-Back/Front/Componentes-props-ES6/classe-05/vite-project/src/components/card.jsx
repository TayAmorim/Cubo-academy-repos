/* eslint-disable react/prop-types */
import "./card.css";
import Closed from "../assets/closed.png";

function Card({ text, textButton, img, colorButton }) {
  return (
    <div className="container">
      <img className="closed-png" src={Closed} alt="" />
      <img src={img} alt="" />
      <p className="text-container">{text}</p>
      <button className={colorButton}>{textButton}</button>
    </div>
  );
}

export default Card;
