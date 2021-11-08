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

export default function EntityTable() {

  var {data: objects} = useGet({
    path: "/object_entities"
  });

  /* lets catch hydra */
  if (objects != null && objects["results"] !== undefined) {
    objects = objects["results"];

    for (let i = 0; i < objects.length; i++) {
      objects[i].id = objects[i].identificatie;
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 2   },
    { field: 'entity.name', headerName: 'Name', flex: 1, valueFormatter: (params) => params.row?.entity?.name  },
    { field: 'entity.endpoint', headerName: 'Endpoint', flex: 1, valueFormatter: (params) => params.row?.entity?.endpoint  },
    { field: 'entity.route', headerName: 'Route', flex: 1, valueFormatter: (params) => params.row?.entity?.route  }, {
      field: 'link',
      headerName: 'View',renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/objects/" + params.value}
          >
            View
          </Link>
        </strong>
      ),}
  ];


  return (
    <div style={{height: 400, width: '100%'}}>
      {objects ? (
          <DataGrid
            rows={objects}
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
