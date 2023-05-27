/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import CARDS from "../../cards";
import { useState } from "react";
import CardBack from "../../assets/card-back.png";
import Sidebar from "../../components/sidebar";

function Main() {
  const [cards, setCards] = useState(CARDS);

  function handleClick(card) {
    setCards(
      cards.map((item) => {
        if (item.id !== card.id) return item;

        return { ...card, turned: true };
      })
    );
  }

  return (
    <div className="container">
      <Sidebar key="one" />
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="cards">
            <img
              onClick={() => handleClick(card)}
              src={card.turned ? card.image : CardBack}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
