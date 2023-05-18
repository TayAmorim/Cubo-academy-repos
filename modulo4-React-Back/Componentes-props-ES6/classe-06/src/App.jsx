import "./App.css";
import KelvinImg from "../src/assets/kelvin.png";
import CharlesImg from "../src/assets/charles.png";
import AnnasImg from "../src/assets/anna.png";
import MarioImg from "../src/assets/mario.png";

const user = [
  {
    id: 1,
    img: { KelvinImg },
    name: "Kelvin Costa",
    social: "@costa",
    followers: 140,
    following: 207,
  },
  {
    id: 2,
    img: { CharlesImg },
    name: "Charles Santos",
    social: "@charles.santos",
    followers: 302,
    following: 419,
  },
  {
    id: 3,
    img: { AnnasImg },
    name: "Anna Bia",
    social: "@anab",
    followers: 842,
    following: 150,
  },
  {
    id: 4,
    img: { Mario },
    name: "Mario Hisashi",
    social: "@hisashi",
    followers: 28,
    following: 17,
  },
];

function App() {
  return (
    <div>
      <h2>oi</h2>
    </div>
  );
}

export default App;
