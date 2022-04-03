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
  { field: "company", headerName: "Company", width: 70 },
  { field: "awardPoints", headerName: "Award Points", width: 120 },
  { field: "group", headerName: "Groiup", width: 120 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value === "active") {
        return <Chip label="Active" size="small" color="success" />;
      } else {
        return <Chip label="Inactive" size="small" color="secondary" />;
      }
    },
  },
  { field: "store", headerName: "Store", width: 120 },
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
    name: "Suleman",
    email: "Suleman@email.com",
    company: "test Company",
    awardPoints: 2,
    group: "Cliff",
    stats: "active",
    store: 1,
  },
];

function Users() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Users
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
            <AddIcon /> New User
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default Users;
