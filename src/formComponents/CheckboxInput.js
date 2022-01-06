import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const CheckboxInput = (props) => {
  const { id, label } = props;
  const isRequired = props.isRequired ? props.isRequired : false;
  const value = props.value ? props.value : "";

  // Need to write is required logic

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {/* Checkbox Label how to get */}
      <FormLabel component="legend">Checkbox Label</FormLabel>
      <FormGroup>
        {label.map((item, index) => {
          return (
            <FormControlLabel
              control={<Checkbox id={id[index]} />}
              label={item}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export { CheckboxInput };
