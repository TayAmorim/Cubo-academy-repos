import "./App.css";
import Logo from "./assets/logo.svg";
import Profile from "./assets/profile.jpg";
import MUSICS from "./musics";
import CardMusic from "./components/card";
import { useRef, useState } from "react";
import Stop from "./assets/stop.svg";
import Previous from "./assets/previous.svg";
import Play from "./assets/play.svg";
import Pause from "./assets/pause.svg";
import Next from "./assets/next.svg";

function App() {
  const audioRef = useRef(null);
  const [currentControlButtonIcon, setCurrentControlButtonIcon] =
    useState(Play);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioTime, setAudioTime] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [currentMusic, setCurrentMusic] = useState({});
  const [userClicking, setUserClicking] = useState(false);

  function handleClickCard(music) {
    setCurrentControlButtonIcon(Play);
    setCurrentMusic(music);
  }

  function ClickPlay() {
    audioRef.current.play();
    setCurrentControlButtonIcon(Pause);
  }

  function ClickPause() {
    audioRef.current.pause();
    setCurrentControlButtonIcon(Play);
  }

  function handleChangeAudio(event) {
    setAudioTime((event.target.currentTime / 60).toFixed(2));
    if (!userClicking) {
      setInputValue(audioTime);
    }
  }

  function handleClickStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentControlButtonIcon(Play);
  }

  function handlePreviousMusic() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentControlButtonIcon(Play);
    const hasPreviusMusic = MUSICS.find(
      (music) => music.id === currentMusic.id - 1
    );

    setCurrentMusic(
      hasPreviusMusic
        ? hasPreviusMusic
        : MUSICS.find((music) => music.id === MUSICS.length)
    );
  }

  function handleNextMusic() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentControlButtonIcon(Play);
    const hasNextMusic = MUSICS.find(
      (music) => music.id === currentMusic.id + 1
    );
    const firstMusicId = MUSICS[0].id;

    setCurrentMusic(
      hasNextMusic
        ? hasNextMusic
        : MUSICS.find((music) => music.id === firstMusicId)
    );
  }
  const handleCurrentTimeChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    setAudioTime(value);
    audioRef.current.currentTime = value * 60;
  };
  return (
    <div className="container">
      <header className="header-container">
        <img src={Logo} alt="logo" />
        <div className="user">
          <img src={Profile} alt="" />
          <p>Bem Vinda, Tayanna.</p>
        </div>
      </header>

      <section className="playlist">
        <h1>The best play list</h1>
        <div className="container-cards">
          {MUSICS.map((music) => (
            <CardMusic
              key={music.id}
              img={music.cover}
              title={music.title}
              description={music.description}
              handleClick={() => handleClickCard(music)}
            />
          ))}
        </div>
      </section>

      <section className="control-playlist">
        <audio
          onTimeUpdate={handleChangeAudio}
          ref={audioRef}
          src={currentMusic.url}
          onDurationChange={(event) =>
            setAudioDuration((event.target.duration / 60).toFixed(2))
          }
        />
        <div className="info">
          <h2 className="info-music">{currentMusic.title}</h2>
          <p className="info-artist">{currentMusic.artist}</p>
        </div>
        <div className="control">
          <div className="control-btn">
            <img
              role="button"
              tabIndex={0}
              onClick={handleClickStop}
              src={Stop}
              alt=""
              title="Parar musica"
            />
            <img src={Previous} onClick={handlePreviousMusic} alt="" />
            <img
              onClick={
                currentControlButtonIcon === Play ? ClickPlay : ClickPause
              }
              role="button"
              tabIndex={1}
              src={currentControlButtonIcon}
              alt=""
            />
            <img src={Next} onClick={handleNextMusic} alt="" />
          </div>
          <div className="control-visual">
            <span>{String(audioTime).replace(".", ":")}</span>
            <input
              max={audioDuration}
              step={0.01}
              className="range-music"
              type="range"
              value={inputValue}
              onChange={handleCurrentTimeChange}
              onMouseDown={() => setUserClicking(true)}
              onMouseUp={() => setUserClicking(false)}
            />
            <span>{String(audioDuration).replace(".", ":")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
