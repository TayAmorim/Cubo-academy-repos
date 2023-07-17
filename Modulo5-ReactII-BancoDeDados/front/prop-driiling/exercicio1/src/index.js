import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./pages/Main";
import { UserStorage } from "./Context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserStorage>
      <Main />
    </UserStorage>
  </React.StrictMode>,
  document.getElementById("root")
);
