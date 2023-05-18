import "./App.css";
import Card from "../src/components/card";

const users = [
  {
    id: 1,
    img: "../src/assets/kelvin.png",
    name: "Kelvin Costa",
    social: "@costa",
    followers: 140,
    following: 207,
  },
  {
    id: 2,
    img: "../src/assets/charles.png",
    name: "Charles Santos",
    social: "@charles.santos",
    followers: 302,
    following: 419,
  },
  {
    id: 3,
    img: "../src/assets/anna.png",
    name: "Anna Bia",
    social: "@anab",
    followers: 842,
    following: 150,
  },
  {
    id: 4,
    img: "../src/assets/mario.png",
    name: "Mario Hisashi",
    social: "@hisashi",
    followers: 28,
    following: 17,
  },
];

function App() {
  return (
    <div className="container">
      {users.map((user) => (
        <Card
          key={user.id}
          img={user.img}
          name={user.name}
          social={user.social}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </div>
  );
}

export default App;
