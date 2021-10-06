import {useRouter} from 'next/router'
import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'

import Typography from '@material-ui/core/Typography';
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get, RestfulProvider} from "restful-react";
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {AppBar, TextField} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AttributesTable from "../../components/entities/attributes_table";

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

export default function Entity()  {

  const router = useRouter()
  const {id} = router.query
  const title = id

  var {data: entity} = useGet({
    path: "/entities/" + id
  });
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

        <Grid item xs={12} >
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
              <Card className={classes.root}>
                <CardContent>
                  Description about entity + some other data we could show

                  <div>
                    <TextField
                      required
                      id="filled-required"
                      label="Name"
                      defaultValue={title}
                      variant="filled"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value={value} index="two">
              <AttributesTable objectId={title} />
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


