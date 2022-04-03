import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

interface TableViewProps {
  rows: any;
  columns: any;
}
export default function TableView(props: TableViewProps) {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
