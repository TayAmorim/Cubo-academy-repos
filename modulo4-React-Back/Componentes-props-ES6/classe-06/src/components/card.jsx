/* eslint-disable react/prop-types */
import "./card.css";

function Card({ img, name, social, followers, following }) {
  return (
    <div className="conatiner-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>{social}</p>
      </div>
      <div className="info-social">
        <p>{followers} seguidores</p>
        <p>{following} seguindo</p>
      </div>
    </div>
  );
}

export default Card;
