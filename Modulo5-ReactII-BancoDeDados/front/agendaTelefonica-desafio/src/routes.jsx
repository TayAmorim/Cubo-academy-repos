/* eslint-disable react/prop-types */
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import useTheme from "./Hooks/useTheme";
import { UserContext, UserStorage } from "./Context/UserContext";
import { useContext } from "react";

function ProtectRoutes({ redirectTo }) {
  const { value } = useContext(UserContext);
  const token = value;
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route element={<ProtectRoutes redirectTo={"/"} />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </UserStorage>
    </ThemeProvider>
  );
}

export default MainRoutes;
