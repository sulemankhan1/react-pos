import { Routes, Route } from "react-router-dom";
import SalesList from "./SalesList";
import AddSale from "./AddSale";

function Sales() {
  return (
    <Routes>
      <Route path="/" element={<SalesList />} />
      <Route path="/new" element={<AddSale />} />
    </Routes>
  );
}

export default Sales;
