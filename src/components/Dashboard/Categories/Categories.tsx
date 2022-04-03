import { Routes, Route } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import AddCategory from "./AddCategory";

function Categories() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesList />} />
      <Route path="/new" element={<AddCategory />} />
    </Routes>
  );
}

export default Categories;
