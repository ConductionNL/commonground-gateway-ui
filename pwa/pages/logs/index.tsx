import Button from "@mui/material/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@mui/material/Box";
import TaskList from "../../components/tasks/list";
import Messages from "../../components/tasks/messages";
import Typography from "@mui/material/Typography";
import ArrangementsCards from "../../components/arrangements/cards";
import makeStyles from '@mui/styles/makeStyles';
import StandardCard from "../../components/common/card";
import { Alert, AlertTitle } from '@mui/material';
import {useGet} from "restful-react";
import {DataGrid} from "@mui/x-data-grid";
import SourceTable from "../../components/sources/table";
import LogsTable from "../../components/logs/table";

function Index() {

  const useStyles = makeStyles({
    marginTop: {
      marginTop: 20,
    },
  });

  const title = 'Logs';
  const classes = useStyles();

  // var {data: logs} = useGet({
  //   path: "/change_logs"
  // });
  // console.log('test');
  // console.log(logs);
  // /* lets catch hydra */
  // if (logs != null && logs["results"] !== undefined) {
  //   logs = logs["results"];
  //
  //   for (let i = 0; i < logs.length; i++) {
  //     logs[i].id = logs[i].identificatie;
  //   }
  // }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Grid item sm={12}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view the logs here</h6>

            <LogsTable/>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
