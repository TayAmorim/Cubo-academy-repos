import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddProducts from "./pages/addProducts";
import Header from "./components/Header";
import "./styles/global.css";

function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adicionar" element={<AddProducts />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
