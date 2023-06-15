import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Teachers from "./Pages/Teachers";
import TeacherDetail from "./Pages/Teacher-Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers-detail/:user" element={<TeacherDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
