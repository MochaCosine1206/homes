import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 500,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};



function getStyles(features, featureName, theme) {
  return {
    fontWeight:
    featureName.indexOf(features) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const features = props.allFeatures;
  const classes = useStyles();
  const theme = useTheme();
  const [featureName, setFeatureName] = React.useState([]);

  function handleChange(event) {
    setFeatureName(event.target.value);
    props.filterChange(event.target.value)
  }

  
  return (
    
    <div className={classes.root}>
      <FormControl id="multiSelect" className={classes.formControl}>
        <InputLabel htmlFor="select-multiple">Select Multiple Features</InputLabel>
        <Select
          multiple
          value={featureName}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
          
        >
          {features.map(feature => (
            <MenuItem key={feature} value={feature} style={getStyles(feature, featureName, theme)}>
              {feature}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
