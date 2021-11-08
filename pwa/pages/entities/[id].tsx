import {useRouter} from 'next/router'
import React from "react";

import Typography from '@mui/material/Typography';
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@mui/material/Box";
import {useGet, Poll, Get, RestfulProvider} from "restful-react";
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, TextField} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AttributesTable from "../../components/attributes/table";
import EntityForm from "../../components/entities/form";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box paddingTop={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function Entity() {

  const router = useRouter()
  const {id} = router.query
  const title = id

  var {data: entity} = useGet({
    path: "http://localhost/api/entities/" + id
  });

  /* lets catch hydra */
  // if (entity != null && entity["results"] !== undefined) {
  //   entity = entity["results"];
  //   entity.id = entity.identificatie;
  // }

  console.log('entity:');
  console.log(entity);


  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minWidth: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      contact_card: {
        marginBottom: '10px',
        backgroundColor: '#F5F5F5'
      },
      card_content: {
        marginBottom: '10px',
      }
    }),
  );

  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>

        <Grid item xs={12}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view your entities attributes and data here.</h6>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Main" value="one" {...a11yProps('one')} />
                <Tab label="Attributes" value="two" {...a11yProps('two')} />
                <Tab label="Data" value="three" {...a11yProps('three')} />
              </Tabs>

            </AppBar>
            <TabPanel value={value} index="one">
              {
                entity != undefined && entity != null ?
                  <EntityForm/>
                  :
                  <EntityForm/>
              }
            </TabPanel>
            <TabPanel value={value} index="two">
              {
                entity != undefined && entity != null && entity.attributes != null ?
                  <AttributesTable attributes={entity.attributes}/>
                  :
                  <AttributesTable/>
              }
            </TabPanel>
            <TabPanel value={value} index="three">
              Get and show data here from gateway
            </TabPanel>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}


