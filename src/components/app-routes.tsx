import { Routes, Route } from "react-router-dom";
import Home from "screens/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
