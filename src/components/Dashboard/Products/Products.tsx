import { Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";

function Products() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/new" element={<AddProduct />} />
    </Routes>
  );
}

export default Products;
