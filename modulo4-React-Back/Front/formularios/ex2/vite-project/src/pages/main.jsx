import "./main.css";
import Form from "../components/form/form";
import ImgBackgroundSucess from "../components/background/imgBackground";
import ImgBackground from "../assets/background.jpg";
import { useState } from "react";

function Main() {
  const [registration, setRegistration] = useState(false);
  return (
    <div className="wrapper-center">
      {registration ? (
        <ImgBackgroundSucess />
      ) : (
        <Form setRegistration={setRegistration} />
      )}
      <div className="backround-wrapper">
        <img src={ImgBackground} alt="" />
      </div>
    </div>
  );
}

export default Main;
