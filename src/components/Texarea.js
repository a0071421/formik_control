import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Texarea = ({ label, name, ...props }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...props} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Texarea;
