import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  image: "",
  name: "",
  code: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  code: Yup.string().required("Please enter a Code"),
});

function AddCategory() {
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
              to="/categories"
            >
              Categories
            </Link>
            <Typography color="text.primary">New Category</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New Category</Typography>
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
                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="file"
                    name="image"
                    label="Choose Image"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="code"
                    label="Code"
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

export default AddCategory;
