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
import SourceTable from "../../components/objects/table";

function Index() {

  const title = 'Objects';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Grid item sm={12}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view all created objects  here.</h6>

            <SourceTable/>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
