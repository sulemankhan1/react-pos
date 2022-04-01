import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Dashboard;
