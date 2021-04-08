import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bored: false,
    Curious: false,
    nothingforme: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { bored, Curious: jason, nothingforme: antoine } = state;
  const error = [bored, jason, antoine].filter((v) => v).length < 1;

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick one</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={bored} onChange={handleChange} name="bored" />}
            label="Bored"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="Curious" />}
            label="Curious"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="nothingforme" />}
            label="Nothing for me"
          />
        </FormGroup>
        <FormHelperText>You need to pick at least one!</FormHelperText>
      </FormControl>
    </div>
  );
}