import {useRouter} from 'next/router'
import React from "react";
import Link from 'next/link'

import Typography from '@material-ui/core/Typography';
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {useGet, useMutate, Poll, Get, RestfulProvider} from "restful-react";
import {Mutate} from 'restful-react'
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton, Radio,
  RadioGroup,
  TextField,
  Tooltip
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EntitiesTable from "../../components/entities/entity_table";
import SourceForm from "../../components/sources/form";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SendIcon from '@material-ui/icons/Send';

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

export default function Source() {

  const router = useRouter()
  const {id} = router.query
  var source = null

  if (id != 'new') {
    var {data: retrievedSource} = useGet({
      path: "http://localhost/api/gateways/" + id
    });
    source = retrievedSource;
  }

  console.log('Source');
  console.log(source);

  var title = id;
  if (id == 'new') {
    title = 'New source';
  }
  if (source != null) {
    title = source.name;
  }

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

  return (
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>

        <Grid item xs={12}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>

            <h6>U can view your sources entities and logs here.</h6>

            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Main" value="one" {...a11yProps('one')} />
                {
                  id != 'new' &&
                  <>
                    <Tab label="Entities" value="two" {...a11yProps('two')} />
                    <Tab label="Logs" value="three" {...a11yProps('three')} />
                  </>
                }
              </Tabs>

            </AppBar>
            <TabPanel value={value} index="one">
              <Card className={classes.root}>
                <CardContent>
                  Manage your source here
                  <Tooltip title="View redoc">
                    <a target="_blank" href="https://commonground-gateway.readthedocs.io/en/development/features/">
                      <IconButton>
                        <HelpOutlineIcon color="primary"/>
                      </IconButton>
                    </a>
                  </Tooltip>
                  <br/><br/>


                  <SourceForm title={title} source={source} />

                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value={value} index="two">
              {
                source != undefined && source != null && source.entities != null ?
                  <EntitiesTable entities={source.entities}/>
                  :
                  <EntitiesTable/>
              }
            </TabPanel>
            <TabPanel value={value} index="three">
              Get and show logs here from gateway
            </TabPanel>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  );
}
