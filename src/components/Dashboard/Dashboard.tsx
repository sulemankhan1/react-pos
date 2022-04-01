import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products/Products";

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/*" element={<Products />} />
    </Routes>
  );
}

export default Dashboard;
