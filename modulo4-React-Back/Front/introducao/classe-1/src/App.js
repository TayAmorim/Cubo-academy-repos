import "./App.css";
import usuario from "../src/assets/gabriela.jpg";
import iconPrev from "../src/assets/icon-prev.svg";
import iconNext from "../src/assets/icon-next.svg";

function App() {
  return (
    <div className="body">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="review-text">
            “Estive interessada em código por um tempo mas não tomava uma
            atitude, até agora. Não consigo recomendar esse curso o suficiente.
            Estou no trabalho dos meu sonhos e vejo um futuro brilhante!”
          </p>
          <div className="author__content-wrapper">
            <div className="author__name">Tayanna Amorim</div>
            <div className="author__title">Desenvolvedora Fullstack</div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__img-wrapper">
          <img src={usuario} alt="" />
        </div>
        <div className="carousel__btn-wrapper">
          <button className="btn btn--previous">
            <img src={iconPrev} alt="" />
          </button>
          <button className="btn btn--next">
            <img src={iconNext} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
