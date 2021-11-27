import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "../components/home/HomeScreen";
import LoginScreen from "../components/login/LoginScreen";
import RegisterScreen from "../components/login/RegisterScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
