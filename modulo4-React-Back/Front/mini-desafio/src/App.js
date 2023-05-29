import { useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Profile from "./assets/profile.jpg";
import MUSICS from "./musics";
import CardMusic from "./components/card";

function App() {
  const [musics, setMusics] = useState(MUSICS);
  return (
    <div className="container">
      <header className="header-container">
        <img src={Logo} alt="logo" />
        <div className="user">
          <img src={Profile} alt="" />
          <p>Bem Vinda, Tayanna.</p>
        </div>
      </header>
      <main>
        <section className="playList">
          <h1>The best play list</h1>
          <div className="container-cards">
            {musics.map((music) => (
              <CardMusic
                key={music.id}
                img={music.cover}
                title={music.title}
                description={music.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
