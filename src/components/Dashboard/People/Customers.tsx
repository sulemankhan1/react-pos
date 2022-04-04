import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DataTable from "../../../utilities/Table/TableView";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 120 },
  { field: "email", headerName: "Email", width: 70 },
  { field: "phoneNo", headerName: "Phone No", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
  { field: "order", headerName: "Order", width: 120 },
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
  { field: "lastOrder", headerName: "Last Order", width: 120 },
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
    name: "Suleman",
    email: "Suleman@email.com",
    phoneNo: "03123333333",
    country: "PK",
    order: 2,
    status: "paid",
    lastOrder: 1,
  },
];

function Customers() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Customers
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/people/customers/new"
          >
            <AddIcon /> New Customer
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default Customers;
