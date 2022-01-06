import React from "react";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  // const id = props.id;
  const { id, label } = props;
  const placeholder = props.placeholder ? props.placeholder : label;
  const isRequired = props.isRequired ? props.isRequired : false;
  const value = props.value ? props.value : "";
  const inputProps = props.pattern;
  const keyboardType = props.keyboardType;
  // const helperText = props.errorMessage ? props.errorMessage : "";
  const minLength = props.minLength && props.minLength;
  const maxLength = props.maxLength && props.maxLength;
  // const icon = porps.icon && props.icon;

  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      inputProps={inputProps}
      defaultValue={value}
      required={isRequired}
      type={keyboardType}
      variant="outlined"
    />
  );
};

export { TextInput };

//in this file we make one filed of our form. and set attributes of that input filed
