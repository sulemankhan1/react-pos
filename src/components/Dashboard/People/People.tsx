import { Routes, Route } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import AddSupplier from "./AddSupplier";
import AddUser from "./AddUser";
import Customers from "./Customers";
import Suppliers from "./Suppliers";
import Users from "./Users";

function People() {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/new" element={<AddCustomer />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/new" element={<AddUser />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/new" element={<AddSupplier />} />
    </Routes>
  );
}

export default People;
