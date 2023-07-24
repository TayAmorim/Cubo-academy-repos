import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
