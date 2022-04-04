import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DataTable from "../../../utilities/Table/TableView";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "product", headerName: "Product", width: 130 },
  { field: "code", headerName: "Code", width: 70 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "brandName", headerName: "Brand Name", width: 130 },
  { field: "cost", headerName: "Cost", width: 70 },
  { field: "qty", headerName: "Quantity", width: 130 },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: () => {
      return (
        <>
          <IconButton aria-label="edit" size="small">
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    product: "Nike Shoes",
    code: "NIS01",
    category: "Shoes",
    price: "$78.00",
    brandName: "Nike",
    cost: "$50.00",
    qty: "100.00",
  },
  {
    id: 2,
    product: "Nike Shoes",
    code: "NIS01",
    category: "Shoes",
    price: "$78.00",
    brandName: "Nike",
    cost: "$50.00",
    qty: "100.00",
  },
  {
    id: 3,
    product: "Nike Shoes",
    code: "NIS01",
    category: "Shoes",
    price: "$78.00",
    brandName: "Nike",
    cost: "$50.00",
    qty: "100.00",
  },
  {
    id: 4,
    product: "Nike Shoes",
    code: "NIS01",
    category: "Shoes",
    price: "$78.00",
    brandName: "Nike",
    cost: "$50.00",
    qty: "100.00",
  },
];

function ProductsList() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/products/new"
          >
            <AddIcon /> Add Product
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default ProductsList;
