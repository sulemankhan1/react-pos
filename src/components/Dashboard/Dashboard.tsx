import { Routes, Route } from "react-router-dom";
import Sidebar from "../../utilities/Layout/Sidebar";
import TopNav from "../../utilities/Layout/TopNav";
import Home from "./Home";
import Products from "./Products/Products";
import { CardHeader, Grid, Card, Typography, CardContent } from "@mui/material";

function Dashboard() {
  return (
    <>
      <TopNav />
      <Grid container direction="row">
        <Grid item xs={2.2}>
          <Sidebar />
        </Grid>
        <Grid item mt={2} xs={9.8} p={2}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/*" element={<Products />} />
              </Routes>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
