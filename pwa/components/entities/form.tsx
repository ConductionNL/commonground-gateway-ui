import * as React from 'react';
import Box from "@material-ui/core/Box";
import {Card, TextField} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import {Select, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {useRouter} from "next/router";
import {useGet} from "restful-react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridMarginTop: {
    marginTop: '20px',
  }
}));

export default function EntityForm() {
  const classes = useStyles();
  const router = useRouter()
  const {id} = router.query
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  };

  var {data: entity} = useGet({
    path: "/entities/" + id
  });
  console.log(entity)

  return (
    <Box paddingTop={3} paddingBottom={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.root}>
            <CardContent>
              {
                entity != null && entity != undefined && entity.name != null ?
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="name"
                      label="Name"
                      defaultValue={entity.name}
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="name"
                      label="Name"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                entity != null && entity != undefined && entity.endpoint != null ?
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="endpoint"
                      label="Endpoint"
                      defaultValue={entity.endpoint}
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="endpoint"
                      label="Endpoint"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                entity != null && entity != undefined && entity.description != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={entity.description}
                      margin="normal"
                      fullWidth
                      id="description"
                      label="Description"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="description"
                      label="Description"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              <Grid container spacing={4} style={{marginTop: 20}}>
                <Grid item xs={6} sm={6} md={6}>
                  <div>
                    <Button variant="outlined">Opslaan</Button>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
