import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RadioInput = (props) => {
  // const id = props.id;
  // Which
  const { id, label } = props;
  const isRequired = props.isRequired ? props.isRequired : false;
  const value = props.value ? props.value : "";

  // Need to write is required logic

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Radio Input</FormLabel>
      <RadioGroup row defaultValue={value} name="radio-buttons-group">
        {label.map((item, index) => {
          return (
            <FormControlLabel
              key={id[index]}
              value={value[index]}
              control={<Radio />}
              label={item}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export { RadioInput };
