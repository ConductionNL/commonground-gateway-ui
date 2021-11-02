import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { useGet } from "restful-react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useAppContext } from "../context/state";

export default function EntityTable() {

  const [sources, setSources] = React.useState(null);
  const context = useAppContext();

  useEffect(() => {
    fetch(context.apiUrl + "/gateways", {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then((data) => {
        setSources(data['hydra:member']);
        console.log('Certs:')
        console.log(data)
      });
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'auth', headerName: 'Auth', flex: 1 },
    { field: 'documentation', headerName: 'Documentation', flex: 3 },
    { field: 'location', headerName: 'Location', flex: 3 },
    {
      field: 'id',
      headerName: 'View', renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/sources/" + params.value}
          >
            View
          </Link>
        </strong>
      ),
    }
  ];


  return (
    <div style={{ height: 400, width: '100%' }}>
      {sources ? (
        <DataGrid
          rows={sources}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[100]}
          disableSelectionOnClick
        />
      )
        :
        (
          <DataGrid
            rows={[]}
            loading={true}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            checkboxSelection
            disableSelectionOnClick
          />
        )
      }
    </div>
  );
}
