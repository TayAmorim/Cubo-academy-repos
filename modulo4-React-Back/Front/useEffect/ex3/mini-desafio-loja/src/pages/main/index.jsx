import "./style.css";
import Logo from "../../assets/logo.svg";
import SHOES from "../../data";
import CardShoes from "../../components/Card-shoes";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import Modal from "../../components/Modal";
import { useState } from "react";

function Main() {
  const [showModal, SetShowModal] = useState(true);
  return (
    <div className="wrapper-body">
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
      <footer>
        <div className="wrapper-footer">
          <div className="address">
            <div className="text-address">
              <h3 className="title-address">Endereço: </h3>
              <p>Rua Cubos , 10</p>
              <p>Jardim Academy</p>
              <p>Salvador - Bahia - CEP 41820-021</p>
            </div>
            <div className="social-address">
              <img src={FacebookIcon} alt="Icone do Facebook" />
              <img src={InstagramIcon} alt="Icone do instagram" />
            </div>
          </div>
          <div className="line"></div>
          <div className="logo">
            <img src={Logo} alt="Logo da Cubos" />
          </div>
        </div>
      </footer>
      {showModal && <Modal SetShowModal={SetShowModal} />}
    </div>
  );
}

export default Main;
