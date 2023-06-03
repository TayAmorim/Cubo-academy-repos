import "./main.css";
import OpenEye from "../assets/open-eye.svg";
import ImgBackground from "../assets/background.jpg";

function Main() {
  return (
    <div className="wrapper-center">
      <div className="form-wrapper">
        <h1>Cadastre-se</h1>
        <form className="form-login">
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <div className="wrapper-password">
            <input type="password" name="password" placeholder="Senha" />
            <img src={OpenEye} alt="Icone de mostrar a senha" />
          </div>
          <button className="btn send" type="submit">
            CADASTRAR
          </button>
          <button className="btn cancel" type="button">
            CANCELAR
          </button>
        </form>
        <p>Já tem cadastro? Clique aqui!</p>
      </div>
      <div className="backround-wrapper">
        <img src={ImgBackground} alt="" />
      </div>
    </div>
  );
}

export default Main;
