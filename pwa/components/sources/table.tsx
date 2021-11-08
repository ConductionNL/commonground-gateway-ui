import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import {useGet} from "restful-react";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
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
