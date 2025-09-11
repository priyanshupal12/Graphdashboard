import React from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({ students }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'roll_number', headerName: 'Roll No', width: 130 },
    { field: 'class', headerName: 'Class', width: 90 }
  ];
  return (
    <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        checkboxSelection
        sx={{ border: 0, flex: 1 }}
      />
    </Paper>
  );
}