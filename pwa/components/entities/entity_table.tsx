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

export default function EntityTable({entities = null}) {

  if (entities == null) {
    var {data: entities} = useGet({
      path: "/entities"
    });
  }

  console.log('entities:');
  console.log(entities);

  /* lets catch hydra */
  if (entities != null && entities["results"] !== undefined) {
    entities = entities["results"];

    for (let i = 0; i < entities.length; i++) {
      entities[i].id = entities[i].identificatie;
    }
  }

  const columns = [
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'endpoint', headerName: 'Endpoint', flex: 1},
    {field: 'route', headerName: 'Route', flex: 1},
    {
      field: 'id',
      headerName: 'View', renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/entities/" + params.value}
          >
            View
          </Link>
        </strong>
      ),
    }
  ];


  return (
    <div style={{height: 400, width: '100%'}}>
      {entities ? (
          <DataGrid
            rows={entities}
            columns={columns}
            pageSize={20}
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
