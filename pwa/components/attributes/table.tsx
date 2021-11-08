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

export default function AttributeTable({attributes = null}) {

  if (attributes == null) {
    var {data: attributes} = useGet({
      path: "/attributes"
    });
  }

  console.log('attributes:');
  console.log(attributes);

  /* lets catch hydra */
  if (attributes != null && attributes["results"] !== undefined) {
    attributes = attributes["results"];

    for (let i = 0; i < attributes.length; i++) {
      attributes[i].id = attributes[i].identificatie;
    }
  }

  const columns = [
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'type', headerName: 'Type', flex: 1}, {
      field: 'id',
      headerName: 'View', renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/attributes/" + params.value}
          >
            View
          </Link>
        </strong>
      ),
    }
  ];


  return (
    <div style={{height: 400, width: '100%'}}>
      {attributes ? (
          <DataGrid
            rows={attributes}
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
