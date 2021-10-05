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

export default function ClaimsTable() {

  var { data: documents } = useGet({
    path: "gateways/documenten/enkelvoudiginformatieobjecten"
  });

  /* lets catch hydra */
  if (documents != null && documents["results"] !== undefined) {
    documents = documents["results"];

    for (let i = 0; i < documents.length; i++) {
      documents[i].id = documents[i].identificatie;
    }
  }

  function createData (
    id: string,
    name: string,
    router: string,
    gateway: string,
    endpoint: string,
    extend: string,
  ) {
    return {id, name, router, gateway, endpoint, extend};
  }


  const rows = [
    createData('123', 'LearningNeed', '/api/learning_needs', '@uc_api', 'learning_needs', 'false')
  ];


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Route</TableCell>
            <TableCell align="right">Gateway</TableCell>
            <TableCell align="right">Endpoint</TableCell>
            <TableCell align="right">Extend</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.router}</TableCell>
              <TableCell align="right">{row.gateway}</TableCell>
              <TableCell align="right">{row.endpoint}</TableCell>
              <TableCell align="right">{row.extend}</TableCell>
              <TableCell align="right"><Link href={'/objects/' + row.id}>View</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
