import "./App.css";
import Logo from "./assets/logo.svg";
import Profile from "./assets/profile.jpg";
import Musics from "./musics";
import CardMusic from "./components/card";
import { useRef, useState } from "react";
import Stop from "./assets/stop.svg";
import Previous from "./assets/previous.svg";
import Play from "./assets/play.svg";
import Pause from "./assets/pause.svg";
import Next from "./assets/next.svg";

function App() {
  const audioRef = useRef(null);
  const inputRangeRef = useRef(null);
  const [title, settitle] = useState(null);
  const [artist, setArtist] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [controlPlay, setControlPlay] = useState(Play);

  function handleClickCard(music) {
    setControlPlay(Play);
    settitle(music.title);
    setArtist(music.artist);
    setAudioSrc((audioRef.current.src = music.url));
  }

  function ClickPlay() {
    audioRef.current.play();
    setControlPlay(Pause);
  }

  function CliCkPause() {
    audioRef.current.pause();
    setControlPlay(Play);
  }

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
                click={() => handleClickCard(music)}
              />
            ))}
          </div>
        </section>
        <audio ref={audioRef} src={audioSrc} />

        <section className="control-playlist">
          <div className="info">
            <h2 className="info-music">{title}</h2>
            <p className="info-artist">{artist}</p>
          </div>
          <div className="control">
            <div className="control-btn">
              <img src={Stop} alt="" />
              <img src={Previous} alt="" />
              <img
                onClick={controlPlay === Play ? ClickPlay : CliCkPause}
                src={controlPlay}
                alt=""
              />
              <img src={Next} alt="" />
            </div>
            <div className="control-visual">
              <span>0</span>
              <input ref={inputRangeRef} className="range-music" type="range" />
              <span>1:36</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
