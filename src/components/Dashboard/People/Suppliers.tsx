import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DataTable from "../../../utilities/Table/TableView";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "companyName", headerName: "Company Name", width: 120 },
  { field: "name", headerName: "Name", width: 70 },
  { field: "email", headerName: "Email", width: 120 },
  { field: "phoneNo", headerName: "Phone No", width: 120 },
  { field: "city", headerName: "City", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
  { field: "gstNo", headerName: "GST No", width: 120 },
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
    companyName: "Test Company",
    name: "Test & Co.",
    email: "test@email.com",
    phoneNo: "0312366666",
    city: "Karachi",
    country: "PK",
    gstNo: 123,
  },
];

function Suppliers() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Suppliers
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/people/suppliers/new"
          >
            <AddIcon /> New Supplier
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default Suppliers;
