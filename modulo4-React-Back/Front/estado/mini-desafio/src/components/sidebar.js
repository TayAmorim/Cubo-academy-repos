import "./style.css";
import React from "react";
import Logo from "../assets/Logo.png";

function Sidebar(cards) {
  function handleClickButton() {
    console.log(cards);
  }
  return (
    <div className="sidebar">
      <div className="sidebar-img">
        <img src={Logo} alt="" />
      </div>
      <button onClick={handleClickButton}>RESET</button>
    </div>
  );
}

export default Sidebar;
