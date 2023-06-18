/* eslint-disable react/prop-types */
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import SingUp from "./pages/SingUp";
import { getItem } from "./utils/storage";

function App() {
  function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem("token");
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
