import React from "react";
import { TextInput } from "./formComponents/TextInput";
import { RadioInput } from "./formComponents/RadioInput";
import { CheckboxInput } from "./formComponents/CheckboxInput";

const Form = (props) => {
  const { data } = props;
  const renderForm = (item) => {
    switch (item.type) {
      case "text input":
        return <TextInput {...item} />;
      case "password":
        return <TextInput {...item} />;
      case "multiline":
        return <TextInput {...item} />;
      default:
        return;
    }
  };

  return <form>{data.map((item) => renderForm(item))}</form>;
};

export default Form;
