import "./App.css";
import Logo from "./assets/logo.svg";
import Profile from "./assets/profile.jpg";
import Musics from "./musics";
import CardMusic from "./components/card";
import { useRef } from "react";
import Stop from "./assets/stop.svg";
import Previous from "./assets/previous.svg";
import Pause from "./assets/pause.svg";
import Next from "./assets/next.svg";

function App() {
  const audioRef = useRef(null);

  return (
    <div className="container">
      <header className="header-container">
        <img src={Logo} alt="logo" />
        <div className="user">
          <img src={Profile} alt="" />
          <p>Bem Vinda, Tayanna.</p>
        </div>
      </header>
      <div>
        <section className="playList">
          <h1>The best play list</h1>
          <div className="container-cards">
            {Musics.map((music) => (
              <CardMusic
                key={music.id}
                img={music.cover}
                title={music.title}
                description={music.description}
              />
            ))}
          </div>
        </section>
        <audio ref={audioRef}>
          <source
            src="https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3"
            type="audio/mp3"
          />
          seu navegador não suporta HTML5
        </audio>
        <section className="control-playlist">
          <div className="info">
            <p className="info-music">Violão acústico</p>
            <p className="info-artist">Robert Mayer</p>
          </div>
          <div className="control">
            <div className="control-btn">
              <img src={Stop} alt="" />
              <img src={Previous} alt="" />
              <img src={Pause} alt="" />
              <img src={Next} alt="" />
            </div>
            <div className="control-visual">
              <span>0</span>
              <input className="range-music" type="range" />
              <span>1:36</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
