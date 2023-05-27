import "./style.css";
import CARDS from "../../cards";
import { useEffect, useState } from "react";
import CardBack from "../../assets/card-back.png";
import Sidebar from "../../components/sidebar";

function Main() {
  const [cards, setCards] = useState(CARDS);
  const cardsSelected = cards.filter((card) => card.turned);
  const cardsClear = cards.filter((card) => !card.turned);

  useEffect(() => {
    if (cardsSelected.length === 2) {
      setTimeout(() => {
        if (cardsSelected[0].slug !== cardsSelected[1].slug) {
          setCards(cards.map((item) => ({ ...item, turned: false })));
        } else {
          setCards(cardsClear);
        }
      }, 1000);
    }
  }, [cards, cardsSelected, cardsClear]);

  function handleClick(card) {
    if (cardsSelected.length >= 2) {
      return;
    }

    setCards(
      cards.map((item) => {
        if (item.id !== card.id) return item;
        return { ...card, turned: true };
      })
    );
  }

  function handleResetButton() {
    setCards(CARDS);
  }

  return (
    <div className="container">
      <Sidebar handleResetButton={handleResetButton} />
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="cards">
            <img
              onClick={() => handleClick(card)}
              src={card.turned ? card.image : CardBack}
              alt="opa"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
