import { Formik, Form } from "formik";
import { Button, Grid } from "@mui/material";
import { format } from "date-fns";
import * as Yup from "yup";

import FormikControl from "../../../utilities/Formik/FormikControl";

// formik constants
const initialValues = {
  name: "",
  description: "",
  country: "",
  gender: "",
  skills: [],
  dateOfBirth: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  description: Yup.string().required("Description is Required"),
  country: Yup.string().required("Country is Required"),
  gender: Yup.string().required("Gender is Required"),
  skills: Yup.array().min(1, "Please Select atleast one Skill"),
  dateOfBirth: Yup.date()
    .typeError("Please Select a Valid Date")
    .required("Date is Required"),
});

// options
const countryOptions = [
  { key: "Pakistan", value: "PK" },
  { key: "India", value: "IN" },
  { key: "USA", value: "USA" },
];

const genderOptions = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];

const skillsOptions = [
  { key: "HTML", value: "html" },
  { key: "CSS", value: "css" },
  { key: "JS", value: "js" },
];

function TestForm() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: any) => {
        return (
          <Form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <FormikControl
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <FormikControl
                  control="textarea"
                  label="Descriptin"
                  name="description"
                />
              </Grid>
              <Grid item>
                <FormikControl
                  control="select"
                  label="Country"
                  name="country"
                  options={countryOptions}
                />
              </Grid>
              <Grid item>
                <FormikControl
                  control="radio"
                  label="Gender"
                  name="gender"
                  options={genderOptions}
                />
              </Grid>
              <Grid item>
                <FormikControl
                  control="checkbox"
                  label="Skills"
                  name="skills"
                  options={skillsOptions}
                />
              </Grid>
              <Grid item>
                <FormikControl
                  control="date"
                  label="Date of Birth"
                  name="dateOfBirth"
                />
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  variant="contained"
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TestForm;
