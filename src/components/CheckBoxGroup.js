import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const CheckBoxGroup = ({ label, name, options, ...props }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          console.log(field);
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="checkbox"
                  id={item.value}
                  {...field}
                  value={item.value}
                  checked={field.value.includes(item.value)}
                />
                <label htmlFor={item.value}>{item.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckBoxGroup;
