import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import TaskList from "../../components/tasks/list";
import Messages from "../../components/tasks/messages";
import Typography from "@material-ui/core/Typography";
import ArrangementsCards from "../../components/arrangements/cards";
import {makeStyles} from "@material-ui/core";
import StandardCard from "../../components/common/card";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useGet} from "restful-react";
import {DataGrid} from "@mui/x-data-grid";
import EntitiesTable from "../../components/entities/entity_table";

function Index() {

  const useStyles = makeStyles({
    marginTop: {
      marginTop: 20,
    },
  });

  const title = 'Entities';
  const classes = useStyles();

  var {data: entities} = useGet({
    path: "/entities"
  });
  console.log(entities);
  // /* lets catch hydra */
  // if (entities != null && entities["results"] !== undefined) {
  //   entities = entities["results"];
  //
  //   for (let i = 0; i < entities.length; i++) {
  //     entities[i].id = entities[i].identificatie;
  //   }
  // }

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

            <h6>U can view your entities here.</h6>
            <Box style={{marginBottom: '5px'}} sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Link href="/entities/new">
                <Button variant="outlined">Add new</Button>
              </Link>
            </Box>
            <EntitiesTable/>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
