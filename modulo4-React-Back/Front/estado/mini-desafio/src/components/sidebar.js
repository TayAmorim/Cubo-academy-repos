import "./style.css";
import React from "react";
import Logo from "../assets/Logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-img">
        <img src={Logo} alt="" />
      </div>
      <button>RESET</button>
    </div>
  );
}

export default Sidebar;
