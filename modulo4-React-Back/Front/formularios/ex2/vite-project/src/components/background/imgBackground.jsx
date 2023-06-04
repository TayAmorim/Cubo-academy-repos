import ImgSucess from "../../assets/woman-success.png";
import "./style.css";

function ImgBackgroundSucess() {
  return (
    <div className="wrapper">
      <img src={ImgSucess} alt="" />
      <h1>Cadastro efetuado com sucesso!</h1>
    </div>
  );
}

export default ImgBackgroundSucess;
