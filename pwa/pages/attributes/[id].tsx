import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {Card, CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AttributesForm from "../../components/attributes/form";
import Button from "@material-ui/core/Button";
import {HelpRounded} from "@material-ui/icons";
import {useGet} from "restful-react";
import {GridRenderCellParams} from "@mui/x-data-grid";
import Link from "@material-ui/core/Link";
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
