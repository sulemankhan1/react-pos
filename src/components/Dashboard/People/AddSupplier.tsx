import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  name: "",
  email: "",
  phoneNo: "",
  gstNo: "",
  address: "",
  city: "",
  state: "",
  country: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  phoneNo: Yup.string().required("PhoneNo is Required"),
  gstNo: Yup.string().required("GST No is Required"),
  address: Yup.string().required("Address is Required"),
  city: Yup.string().required("City is Required"),
  state: Yup.string().required("State is Required"),
  country: Yup.string().required("Country is Required"),
});

function AddSupplier() {
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
              to="/people/suppliers"
            >
              Suppliers
            </Link>
            <Typography color="text.primary">New Supplier</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New Supplier</Typography>
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
                    name="email"
                    label="Email"
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
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="gstNo"
                    label="GST No"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="textarea"
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
                    name="country"
                    label="Country"
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

export default AddSupplier;
