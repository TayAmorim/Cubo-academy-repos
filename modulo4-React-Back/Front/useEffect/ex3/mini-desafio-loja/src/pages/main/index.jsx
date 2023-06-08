import "./style.css";
import Logo from "../../assets/logo.svg";
import SHOES from "../../data";
import CardShoes from "../../components/Card-shoes";

function Main() {
  return (
    <>
      <header className="wrapper-header">
        <div className="header-text">
          <h1>MODA MASCULINA</h1>
          <p>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</p>
        </div>
        <img className="img-logo" src={Logo} alt="logo da Cubos" />
      </header>
      <main className="wrapper-main">
        {SHOES.map((shoe) => (
          <CardShoes {...shoe} key={shoe.id} />
        ))}
      </main>
    </>
  );
}

export default Main;
