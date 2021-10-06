import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import {useGet, useMutate} from "restful-react";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import Grid from "@material-ui/core/Grid";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SendIcon from "@material-ui/icons/Send";
import CardContent from "@material-ui/core/CardContent";

export default function sourceForm({title, source = null}) {

  const saveSource = event => {
    event.preventDefault();

    console.log(event.target.name.value);
    const data = {
      name: event.target.name.value,
    }
    const {mutate: post} = useMutate({
      verb: "POST",
      path: `localhost/api/gateways`,
      onMutate: (body => data)
    });
    console.log('Post:');
    console.log(post);
    console.log('Data:');
    console.log(data);

  }

  // Dit werkt maar is ongewenst
  const saveSource2 = async event => {
    event.preventDefault()

    const res = await fetch('http://localhost/api/gateways', {
      body: JSON.stringify({
        name: event.target.name.value,
        location: event.target.location.value,
        auth: event.target.auth.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log('Result:');
    console.log(result);

  }


  return (
    <form onSubmit={saveSource2}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6}>
          <Grid item xs={12}>
            {
              source != null && source.name != null ?
                <TextField
                  margin="normal"
                  required
                  id="name"
                  label="Name"
                  defaultValue={source.name}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  required
                  id="name"
                  label="Name"
                  defaultValue={title}
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.description != null ?
                <TextField
                  margin="normal"
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue={source.description}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.location != null ?
                <TextField
                  margin="normal"
                  required
                  id="location"
                  label="Location"
                  defaultValue={source.location}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  required
                  id="location"
                  label="Location"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.auth != null ?
                <TextField
                  margin="normal"
                  required
                  id="auth"
                  label="Auth"
                  defaultValue={source.auth}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  required
                  id="auth"
                  label="Auth"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.locale != null ?
                <TextField
                  margin="normal"
                  id="locale"
                  label="Locale"
                  defaultValue={source.locale}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="locale"
                  label="Locale"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.accept != null ?
                <TextField
                  margin="normal"
                  id="accept"
                  label="Accept"
                  defaultValue={source.accept}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="accept"
                  label="Accept"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.jwt != null ?
                <TextField
                  margin="normal"
                  id="jwt"
                  label="Jwt"
                  defaultValue={source.jwt}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="jwt"
                  label="Jwt"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Grid item xs={12}>
            {
              source != null && source.jwtId != null ?
                <TextField
                  margin="normal"
                  id="jwtId"
                  label="JwtId"
                  defaultValue={source.jwtId}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="jwtId"
                  label="JwtId"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.secret != null ?
                <TextField
                  margin="normal"
                  id="secret"
                  label="Secret"
                  defaultValue={source.secret}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="secret"
                  label="Secret"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.username != null ?
                <TextField
                  margin="normal"
                  id="username"
                  label="Username"
                  defaultValue={source.username}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  margin="normal"
                  id="username"
                  label="Username"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.password != null ?
                <TextField
                  margin="normal"
                  id="password"
                  type="password"
                  label="Password"
                  defaultValue={source.password}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  type="password"
                  margin="normal"
                  id="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.apikey != null ?
                <TextField
                  margin="normal"
                  id="apikey"
                  label="Apikey"
                  defaultValue={source.apikey}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  type="password"
                  margin="normal"
                  id="apikey"
                  label="Apikey"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            {
              source != null && source.documentation != null ?
                <TextField
                  margin="normal"
                  id="documentation"
                  label="Documentation"
                  defaultValue={source.documentation}
                  variant="standard"
                  fullWidth
                /> :
                <TextField
                  type="password"
                  margin="normal"
                  id="documentation"
                  label="Documentation"
                  variant="standard"
                  fullWidth
                />
            }
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Logging</FormLabel>
              {
                source != null && source.logging != null ?
                  <RadioGroup
                    row
                    aria-label="persistToGateway"
                    defaultValue={source.logging}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup> :
                  <RadioGroup
                    row
                    aria-label="persistToGateway"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
              }
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Box style={{marginBottom: '5px'}} sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type="submit" variant="standard"  size="large" endIcon={<SendIcon/>}>
          Save
        </Button>
      </Box>
    </form>
  );
}
