import { Routes, Route } from "react-router-dom";
import ReturnsList from "./ReturnsList";
import AddReturn from "./AddReturn";

function Returns() {
  return (
    <Routes>
      <Route path="/" element={<ReturnsList />} />
      <Route path="/new" element={<AddReturn />} />
    </Routes>
  );
}

export default Returns;
