import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "../components/home/HomeScreen";
import LoginScreen from "../components/login/LoginScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
