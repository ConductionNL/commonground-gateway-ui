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

function Index() {

  const useStyles = makeStyles({
    marginTop: {
      marginTop: 20,
    },
  });

  const title = 'Gateways';
  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >

      <Grid container >
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view your installed/owned gateways here.</h6>

            <Grid className={classes.marginTop} item xs container direction="row" spacing={2}>
              <Grid item xs={12} >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                      <StandardCard
                        title="BiSC"
                        description="De gateway voor de BiSC omgeving"
                        link="/gateways/BiSC"
                        linkText="View"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                      <StandardCard
                        title="BiSC"
                        description="De gateway voor de BiSC omgeving"
                        link="/gateways/BiSC"
                        linkText="View"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                      <StandardCard
                        title="BiSC"
                        description="De gateway voor de BiSC omgeving"
                        link="/gateways/BiSC"
                        linkText="View"
                      />
                    </Grid>
                </Grid>
              </Grid>
              {/*<Grid item xs={6} >*/}
              {/*  <Typography variant="h6">Berichten</Typography>*/}
              {/*  <Messages />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={6} >*/}
              {/*  <Typography variant="h6">Taken</Typography>*/}
              {/*  <TaskList />*/}
              {/*</Grid>*/}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
