/* eslint-disable react/prop-types */
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import SingUp from "./pages/SingUp";
import { getItem } from "./utils/storage";

function App() {
  function ProtectedRoutes({ redirectTo }) {
    console.log("render");
    const isAuthenticated = getItem("token");
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  }
  return (
    <Routes>
      <Route path="/" element={<SingUp />} />
      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
