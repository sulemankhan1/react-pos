import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products/Products";
import DashboardLayout from "../../utilities/Layout/DashboardLayout";
import Categories from "./Categories/Categories";
import Sales from "./Sales/Sales";
import Purchases from "./Purchases/Purchases";
import People from "./People/People";
import Reports from "./Reports/Reports";
import Returns from "./Returns/Returns";

function Dashboard() {
  const DashboardRoutes = (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/categories/*" element={<Categories />} />
        <Route path="/sales/*" element={<Sales />} />
        <Route path="/purchases/*" element={<Purchases />} />
        <Route path="/returns/*" element={<Returns />} />
        <Route path="/people/*" element={<People />} />
        <Route path="/reports/*" element={<Reports />} />
      </Routes>
    </div>
  );
  return <DashboardLayout>{DashboardRoutes}</DashboardLayout>;
}

export default Dashboard;
