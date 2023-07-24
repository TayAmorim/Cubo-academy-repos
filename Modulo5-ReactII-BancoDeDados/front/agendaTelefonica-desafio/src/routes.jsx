import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import useTheme from "./Hooks/useTheme";

function MainRoutes() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default MainRoutes;
