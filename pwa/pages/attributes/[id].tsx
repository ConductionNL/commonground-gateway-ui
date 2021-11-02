import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@mui/material/Box";
import {Card, CardContent} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import AttributesForm from "../../components/attributes/form";
import Button from "@mui/material/Button";
import {HelpRounded} from "@mui/icons-material";
import {useGet} from "restful-react";
import {GridRenderCellParams} from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridMarginTop: {
    marginTop: '20px',
  }
}));

function Attribute() {
  const classes = useStyles();
  const title = 'Attribute'
  const description = 'Omschrijving over de attributen'

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Grid item sm={12} md={12}>
          <PageHeader title={title}/>
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <AttributesForm/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Attribute
