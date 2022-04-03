import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DataTable from "../../../utilities/Table/TableView";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "Code", headerName: "Code", width: 200 },
  { field: "AddedBy", headerName: "Added By", width: 200 },
  {
    field: "Action",
    headerName: "Action",
    width: 200,
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
    Name: "Computer",
    Code: "CS1",
    AddedBy: "Test user",
    Action: "",
  },
];

function CategoriesList() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Categories
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/categories/new"
          >
            <AddIcon /> Add Category
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default CategoriesList;
