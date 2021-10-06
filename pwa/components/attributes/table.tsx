import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
