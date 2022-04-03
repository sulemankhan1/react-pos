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
  { field: "customer", headerName: "Customer", width: 120 },
  { field: "total", headerName: "Total", width: 70 },
  { field: "paid", headerName: "Paid", width: 70 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value === "paid") {
        return <Chip label="Paid" size="small" color="success" />;
      } else {
        return <Chip label="Not Paid" size="small" color="secondary" />;
      }
    },
  },
  { field: "biller", headerName: "Biller", width: 70 },
  { field: "tax", headerName: "Tax", width: 70 },
  {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: () => {
      return (
        <>
          <IconButton aria-label="delete" size="small">
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
    date: "01 Jan 2022",
    customer: "Bill Yerds",
    total: "38.50",
    paid: "38.50",
    status: "paid",
    biller: "$50.00",
    tax: "100.00",
  },
  {
    id: 2,
    date: "02 Jan 2022",
    customer: "Test",
    total: "48.50",
    paid: "48.50",
    status: "pending",
    biller: "$50.00",
    tax: "100.00",
  },
];

function SalesList() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Sales
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/sales/new"
          >
            <AddIcon /> New Sale
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default SalesList;
