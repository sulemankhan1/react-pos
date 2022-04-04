import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DataTable from "../../../utilities/Table/TableView";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "referenceNo", headerName: "Ref No", width: 70 },
  { field: "supplier", headerName: "Supplier", width: 120 },
  {
    field: "purchaseStatus",
    headerName: "Purchase Status",
    width: 130,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value === "completed") {
        return <Chip label="Completed" size="small" color="success" />;
      } else {
        return <Chip label="Not Paid" size="small" color="secondary" />;
      }
    },
  },
  { field: "total", headerName: "Total", width: 70 },
  { field: "paid", headerName: "Paid", width: 100 },
  { field: "balance", headerName: "Balance", width: 70 },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 100,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value === "paid") {
        return <Chip label="Paid" size="small" color="success" />;
      } else {
        return <Chip label="Not Paid" size="small" color="error" />;
      }
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 90,
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
    date: "10 Jan 2022",
    referenceNo: "P0201",
    supplier: "Fruits Supply",
    purchaseStatus: "completed",
    total: 50.1,
    paid: 45,
    balance: 5.1,
    paymentStatus: "pending",
  },
  {
    id: 2,
    date: "10 Jan 2022",
    referenceNo: "P0202",
    supplier: "Fruits Supply",
    purchaseStatus: "completed",
    total: 50.1,
    paid: 45,
    balance: 5.1,
    paymentStatus: "paid",
  },
];

function PurchasesList() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Purchases
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/purchases/new"
          >
            <AddIcon /> New Purchase
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default PurchasesList;
