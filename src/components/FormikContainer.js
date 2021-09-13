import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropOptions = [
  { key: "Select a option", value: "" },
  { key: "12cm", value: "12cm" },
  { key: "15cm", value: "15cm" },
  { key: "19cm", value: "19cm" },
  { key: "22cm", value: "22cm" },
];

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalud email format"),
  description: Yup.string().required("Required"),
  selectOption: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
  checkboxOption: Yup.array().required("Required"),
});

const onSubmit = (value) => {
  console.log("Form data", value);
};
const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="Dscription"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select your prefer penis length"
              name="selectOption"
              options={dropOptions}
            />
            <FormikControl
              control="radio"
              label="Radio topic"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox topics"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
