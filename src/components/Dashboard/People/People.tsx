import { Routes, Route } from "react-router-dom";
import Customers from "./Customers";
import Suppliers from "./Suppliers";
import Users from "./Users";

function People() {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/users" element={<Users />} />
      <Route path="/suppliers" element={<Suppliers />} />
    </Routes>
  );
}

export default People;
