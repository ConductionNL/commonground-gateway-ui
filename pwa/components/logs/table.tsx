import React from 'react';
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

export default function LogsTable() {

  var {data: logs} = useGet({
    path: "/change_logs"
  });
  if (logs != null) {
    console.log(logs);
  }

  /* lets catch hydra */
  if (logs != null && logs["results"] !== undefined) {
    logs = logs["results"];

    for (let i = 0; i < logs.length; i++) {
      logs[i].id = logs[i].identificatie;
    }
  }

  const columns = [
    { field: 'action', headerName: 'Action', flex: 1 },
    // { field: 'objectId', headerName: 'ObjectId', flex: 1 },
    // { field: 'objectClass', headerName: 'ObjectClass', flex: 1 },
    { field: 'version', headerName: 'Version', flex: 1 },
    { field: 'data', headerName: 'Data', flex: 1 },
    // { field: 'username', headerName: 'Username', flex: 1 },
    // { field: 'session', headerName: 'Session', flex: 1 },
    { field: 'dateCreated', headerName: 'Date created', flex: 1 },
    { field: 'dateModified', headerName: 'Date modified', flex: 1 }
  ];


  return (
    <div style={{height: 400, width: '100%'}}>
      {logs ? (
          <DataGrid
            rows={logs}
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
