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

function Index() {

  const useStyles = makeStyles({
    marginTop: {
      marginTop: 20,
    },
  });

  const title = 'Sources';
  const classes = useStyles();
  const columns = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'name', headerName: 'Name', flex: 1},
  ];


  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Grid item sm={12}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view your installed/owned sources here.</h6>
            <Box style={{marginBottom: '5px'}} sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Link href="/sources/new">
                <Button variant="outlined">Add new</Button>
              </Link>
            </Box>
            <SourceTable/>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
