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
  { field: "biller", headerName: "Biller", width: 120 },
  { field: "customer", headerName: "Customer", width: 120 },
  { field: "grandTotal", headerName: "Grand Total", width: 120 },
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
    date: "10 Jan 2022",
    referenceNo: "P0201",
    biller: "Test Biller",
    customer: "Customer 1",
    grandTotal: 20.1,
  },
];

function ReturnsList() {
  return (
    <>
      <Grid container justifyContent="space-between" mb={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Returns List
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="outlined"
            size="small"
            component={Link}
            to="/returns/new"
          >
            <AddIcon /> New Return
          </Button>
        </Grid>
      </Grid>
      <DataTable columns={columns} rows={rows} />
    </>
  );
}

export default ReturnsList;
