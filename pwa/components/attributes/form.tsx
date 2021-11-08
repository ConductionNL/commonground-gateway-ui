import * as React from 'react';
import Box from "@mui/material/Box";
import {Card, TextField} from '@mui/material';
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import {Select, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import makeStyles from '@mui/styles/makeStyles';
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

export default function AttributeForm() {
  const classes = useStyles();
  const router = useRouter()
  const {id} = router.query
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  };

  var {data: attribute} = useGet({
    path: "/attributes/" + id
  });
  const description = 'Omschrijving over de attributen'
  console.log(attribute)

  return (
    <Box paddingTop={3} paddingBottom={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6}>
          <Card className={classes.root}>
            <CardContent>
              {
                attribute != null && attribute != undefined && attribute.name != null ?
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="name"
                      label="Name"
                      defaultValue={attribute.name}
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
                attribute != null && attribute != undefined && attribute.description != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.description}
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
              {
                attribute != null && attribute != undefined && attribute.type != null ?
                  <Grid md={12}>
                    <FormControl component="fieldset" fullWidth margin="normal">
                      <FormLabel component="legend">Type</FormLabel>
                      <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={type}
                        label="Type"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={20}>{attribute.type}</MenuItem>
                        <MenuItem value={20}>string</MenuItem>
                        <MenuItem value={30}>array</MenuItem>
                        <MenuItem value={40}>integer</MenuItem>
                        <MenuItem value={50}>boolean</MenuItem>
                        <MenuItem value={60}>object</MenuItem>
                        <MenuItem value={70}>date</MenuItem>
                        <MenuItem value={80}>datetime</MenuItem>
                        <MenuItem value={90}>number</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  :
                  <Grid md={12}>
                    <FormControl component="fieldset" fullWidth margin="normal">
                      <FormLabel component="legend">Type</FormLabel>
                      <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={type}
                        label="Type"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={20}>string</MenuItem>
                        <MenuItem value={30}>array</MenuItem>
                        <MenuItem value={40}>integer</MenuItem>
                        <MenuItem value={50}>boolean</MenuItem>
                        <MenuItem value={60}>object</MenuItem>
                        <MenuItem value={70}>date</MenuItem>
                        <MenuItem value={80}>datetime</MenuItem>
                        <MenuItem value={90}>number</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.format != null ?
                  <Grid md={12}>
                    <FormControl component="fieldset" fullWidth margin="normal">
                      <FormLabel component="legend">Format</FormLabel>
                      <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={type}
                        label="Format"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>{attribute.format}</MenuItem>
                        <MenuItem value={20}>email</MenuItem>
                        <MenuItem value={30}>telephone</MenuItem>
                        <MenuItem value={40}>countryCode</MenuItem>
                        <MenuItem value={50}>bsn</MenuItem>
                        <MenuItem value={60}>url</MenuItem>
                        <MenuItem value={70}>uuid</MenuItem>
                        <MenuItem value={80}>json</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  :
                  <Grid md={12}>
                    <FormControl component="fieldset" fullWidth margin="normal">
                      <FormLabel component="legend">Format</FormLabel>
                      <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={type}
                        label="Format"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={20}>email</MenuItem>
                        <MenuItem value={30}>telephone</MenuItem>
                        <MenuItem value={40}>countryCode</MenuItem>
                        <MenuItem value={50}>bsn</MenuItem>
                        <MenuItem value={60}>url</MenuItem>
                        <MenuItem value={70}>uuid</MenuItem>
                        <MenuItem value={80}>json</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
              }
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">PersistToGateway</FormLabel>
                  <RadioGroup
                    row
                    aria-label="persistToGateway"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Cascade</FormLabel>
                  <RadioGroup
                    row
                    aria-label="cascade"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Searchable</FormLabel>
                  <RadioGroup
                    row
                    aria-label="searchable"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} style={{float: "right"}}>
                  <div>
                    <Button variant="outlined">Opslaan</Button>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Required</FormLabel>
                  <RadioGroup
                    row
                    aria-label="required"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">MustBeUnique</FormLabel>
                  <RadioGroup
                    row
                    aria-label="mustBeUnique"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {
                attribute != null && attribute != undefined && attribute.default != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.default}
                      margin="normal"
                      fullWidth
                      id="default"
                      label="Default"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="default"
                      label="Default"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.multipleOf != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.multipleOf}
                      margin="normal"
                      fullWidth
                      id="multipleOf"
                      label="MultipleOf"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="multipleOf"
                      label="MultipleOf"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.maximum != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.maximum}
                      margin="normal"
                      fullWidth
                      id="maximum"
                      label="Maximum"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="maximum"
                      label="Maximum"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.minimum != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.minimum}
                      margin="normal"
                      fullWidth
                      id="minimum"
                      label="Minimum"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="minimum"
                      label="Minimum"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">ExclusiveMaximum</FormLabel>
                  <RadioGroup
                    row
                    aria-label="exclusiveMaximum"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">ExclusiveMinimum</FormLabel>
                  <RadioGroup
                    row
                    aria-label="exclusiveMinimum"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {
                attribute != null && attribute != undefined && attribute.maxLength != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.maxLength}
                      margin="normal"
                      fullWidth
                      id="maxLength"
                      label="MaxLength"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="maxLength"
                      label="MaxLength"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.minLength != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.minLength}
                      margin="normal"
                      fullWidth
                      id="minLength"
                      label="MinLength"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="minLength"
                      label="MinLength"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.maxItems != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.maxItems}
                      margin="normal"
                      fullWidth
                      id="maxItems"
                      label="MaxItems"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="maxItems"
                      label="MaxItems"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.minItems != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.minItems}
                      margin="normal"
                      fullWidth
                      id="minItems"
                      label="MinItems"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="minItems"
                      label="MinItems"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.maxDate != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.maxDate}
                      margin="normal"
                      fullWidth
                      id="maxDate"
                      label="MaxDate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="maxDate"
                      label="MaxDate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.minDate != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.minDate}
                      margin="normal"
                      fullWidth
                      id="minDate"
                      label="MinDate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="minDate"
                      label="MinDate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
              }
              <Grid md={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">UniqueItems</FormLabel>
                  <RadioGroup
                    row
                    aria-label="uniqueItems"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="true" control={<Radio/>} label="True"/>
                    <FormControlLabel value="false" control={<Radio/>} label="False"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {
                attribute != null && attribute != undefined && attribute.minProperties != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.minProperties}
                      margin="normal"
                      fullWidth
                      id="minProperties"
                      label="MinProperties"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="minProperties"
                      label="MinProperties"
                      type="number"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.enum != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.enum}
                      margin="normal"
                      fullWidth
                      id="enum"
                      label="Enum"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="enum"
                      label="Enum"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.allOf != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.allOf}
                      margin="normal"
                      fullWidth
                      id="allOf"
                      label="AllOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="allOf"
                      label="AllOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.oneOf != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.oneOf}
                      margin="normal"
                      fullWidth
                      id="oneOf"
                      label="OneOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="oneOf"
                      label="OneOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.anyOf != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.anyOf}
                      margin="normal"
                      fullWidth
                      id="anyOf"
                      label="AnyOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="anyOf"
                      label="AnyOf"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.not != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.not}
                      margin="normal"
                      fullWidth
                      id="not"
                      label="Not"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="not"
                      label="Not"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.items != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.items}
                      margin="normal"
                      fullWidth
                      id="items"
                      label="Items"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="items"
                      label="Items"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              {
                attribute != null && attribute != undefined && attribute.additionalProperties != null ?
                  <Grid item md={12}>
                    <TextField
                      defaultValue={attribute.additionalProperties}
                      margin="normal"
                      fullWidth
                      id="additionalProperties"
                      label="AdditionalProperties"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  :
                  <Grid item md={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="additionalProperties"
                      label="AdditionalProperties"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
              }
              <Grid item md={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="requiredIf"
                  label="RequiredIf"
                  type="text"
                  variant="standard"
                />
              </Grid>
              <Grid container spacing={2}>
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
