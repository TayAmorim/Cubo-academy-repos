import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AdicionarProdutos from "./pages/adicionarProdutos";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adicionar" element={<AdicionarProdutos />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
