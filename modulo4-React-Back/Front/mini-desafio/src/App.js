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
  const [audioSrc, setAudioSrc] = useState();
  const [controlPlay, setControlPlay] = useState(Play);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioTime, setAudioTime] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [musicId, setMuiscId] = useState(0);

  let musicFind;
  const musicsLength = Musics.length;

  function handleClickCard(music) {
    setAudioSrc(music.url);
    setMuiscId(music.id);
    setControlPlay(Play);
    settitle(music.title);
    setArtist(music.artist);
  }

  function ClickPlay() {
    audioRef.current.play();
    setControlPlay(Pause);
  }

  function CliCkPause() {
    audioRef.current.pause();
    setControlPlay(Play);
  }

  function handleChangeAudio(event) {
    setAudioTime((event.target.currentTime / 60).toFixed(2));
    setInputValue(audioTime);
  }

  function handleClickStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setControlPlay(Play);
  }

  function handlePreviousMusic() {
    musicFind = Musics.find((music) => music.id === musicId - 1);
    if (!musicFind) {
      musicFind = Musics.find((music) => music.id === musicsLength);
    }
    setMuiscId(musicFind.id);
    setAudioSrc(musicFind.url);
    settitle(musicFind.title);
    setArtist(musicFind.artist);
  }

  function handleNextMusic() {
    musicFind = Musics.find((music) => music.id === musicId + 1);
    let firstMusic = Musics[0].id;

    if (!musicFind) {
      musicFind = Musics.find((music) => music.id === firstMusic);
    }

    setMuiscId(musicFind.id);
    setAudioSrc(musicFind.url);
    settitle(musicFind.title);
    setArtist(musicFind.artist);
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
        <audio
          onTimeUpdate={(event) => handleChangeAudio(event)}
          ref={audioRef}
          src={audioSrc}
          onDurationChange={(event) =>
            setAudioDuration((event.target.duration / 60).toFixed(1))
          }
        />

        <section className="control-playlist">
          <div className="info">
            <h2 className="info-music">{title}</h2>
            <p className="info-artist">{artist}</p>
          </div>
          <div className="control">
            <div className="control-btn">
              <img onClick={handleClickStop} src={Stop} alt="" />
              <img src={Previous} onClick={handlePreviousMusic} alt="" />
              <img
                onClick={controlPlay === Play ? ClickPlay : CliCkPause}
                src={controlPlay}
                alt=""
              />
              <img src={Next} onClick={handleNextMusic} alt="" />
            </div>
            <div className="control-visual">
              <span>{audioTime}</span>
              <input
                max={audioDuration}
                ref={inputRangeRef}
                className="range-music"
                type="range"
                value={inputValue}
                onChange={() => setInputValue(audioTime)}
              />
              <span>{audioDuration}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
