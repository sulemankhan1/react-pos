import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  name: "",
  phoneNo: "",
  email: "",
  gender: "",
  userName: "",
  password: "",
  cPassword: "",
  status: "",
  notifyUser: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  phoneNo: Yup.string().required("PhoneNo is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  gender: Yup.string().required("Please select user Gender"),
  userName: Yup.string().required("Country is Required"),
  password: Yup.string().required("Address is Required"),
  cPassword: Yup.string().required("City is Required"),
  status: Yup.string().required("State is Required"),
});

const genderOptions = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];

function AddUser() {
  const onSubmit = (values: any) => {
    // const onSubmit = (values: { [field: string]: any }) => {
    console.log("form values: ", values);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container mb={3}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              component={RouteLink}
              to="/people/users"
            >
              Users
            </Link>
            <Typography color="text.primary">New User</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New User</Typography>
          </Grid>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: any) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="phoneNo"
                    label="Phone Number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="email"
                    label="Email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="select"
                    name="gender"
                    label="Gender"
                    options={genderOptions}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="address"
                    label="Address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="city"
                    label="City"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="state"
                    label="State"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="customerGroup"
                    label="Customer Group"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="checkbox"
                    name="notifyUser"
                    label="Notify User by Email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!formik.isValid}
                    onClick={formik.submitForm}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default AddUser;
