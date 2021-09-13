import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ label, name, options, ...props }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...props}>
        {options.map((item) => (
          <option key={item.key} value={item.value}>
            {item.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
