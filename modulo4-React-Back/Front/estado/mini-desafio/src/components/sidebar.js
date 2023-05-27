import "./style.css";
import React from "react";
import Logo from "../assets/Logo.png";

function Sidebar({ handleResetButton }) {
  return (
    <div className="sidebar">
      <div className="sidebar-img">
        <img src={Logo} alt="" />
      </div>
      <button onClick={handleResetButton}>RESET</button>
    </div>
  );
}

export default Sidebar;
