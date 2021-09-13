import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = ({ label, name, ...props }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...props} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
