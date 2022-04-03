import { Routes, Route } from "react-router-dom";
import PurchasesList from "./PurchasesList";
import AddPurchase from "./AddPurchase";

function Purchases() {
  return (
    <Routes>
      <Route path="/" element={<PurchasesList />} />
      <Route path="/new" element={<AddPurchase />} />
    </Routes>
  );
}

export default Purchases;
