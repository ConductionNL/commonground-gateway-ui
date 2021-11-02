import {useRouter} from 'next/router'
import React, { useEffect } from "react";
import Link from 'next/link'

import Typography from '@mui/material/Typography';
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@mui/material/Box";
import {useGet, useMutate, Poll, Get, RestfulProvider} from "restful-react";
import {Mutate} from 'restful-react'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
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
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EntitiesTable from "../../components/entities/entity_table";
import SourceForm from "../../components/sources/form";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SendIcon from '@mui/icons-material/Send';

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
  const { id } = router.query
  const [source, setSource] = React.useState(null);
  const context = useAppContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      getSource(id);
    }
  }, []);

  const getSource = (id = null) => {
    useEffect(() => {
      fetch(context.apiUrl + "/gateways", {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then((data) => {
          setSource(data);
        });
    }, []);
  }

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
                  <Tab label="Entities" value="two" {...a11yProps('two')} />
                }
                {
                  id != 'new' &&
                  <Tab label="Logs" value="three" {...a11yProps('three')} />
                }
              </Tabs>

            </AppBar>
            <TabPanel value={value} index="one">
              <Card className={classes.root}>
                <CardContent>
                  Manage your source here
                  <Tooltip title="View redoc">
                    <a target="_blank" href="https://commonground-gateway.readthedocs.io/en/development/features/">
                      <IconButton size="large">
                        <HelpOutlineIcon color="primary"/>
                      </IconButton>
                    </a>
                  </Tooltip>
                  <br/><br/>


                  <SourceForm title={title} source={source}/>

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
