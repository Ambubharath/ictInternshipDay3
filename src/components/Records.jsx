import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150,
    },
    {
      field: 'semester',
      headerName: 'Semester',
      type: 'number',
      width: 100,
    }
  ];

  const rows = [
    { id: 1, name: 'Nandini Krishna', department: 'CS', semester: 'S4' },
    { id: 2, name: 'Kevin Abey Issac', department: 'EC', semester: 'S4' },
    { id: 3, name: 'Ambu Bharath', department: 'CE', semester: 'S6' },
    { id: 4, name: 'Alvin Mathews', department: 'ME', semester: 'S6' },
    { id: 5, name: 'Rohith B Nair', department: 'CS   ', semester: 'S4' },
    { id: 6, name: 'Varun S', department: 'Red Priestess', semester: 'S8' },

  ];


const Records = () => {
  return (
  <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  </>
  )
}

export default Records