import React from "react";
import Input from "./Input";
import Texarea from "./Texarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckBoxGroup from "./CheckBoxGroup";
const FormikControl = ({ control, ...props }) => {
  switch (control) {
    case "input":
      return <Input {...props} />;
    case "textarea":
      return <Texarea {...props} />;

    case "select":
      return <Select {...props} />;
    case "radio":
      return <RadioButtons {...props} />;
    case "checkbox":
      return <CheckBoxGroup {...props} />;
    case "date":
      break;
    default:
      return null;
  }
};

export default FormikControl;
