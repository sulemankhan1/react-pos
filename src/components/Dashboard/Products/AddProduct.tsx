import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  productType: "",
  name: "",
  code: "",
  barcode: "",
  category: "",
  cost: 0,
  price: 0,
  taxMethod: "",
  quantity: 0,
  image: "",
  description: "",
};

const validationSchema = Yup.object({
  productType: Yup.string().required("Product Type Required"),
  name: Yup.string().required("Name is Required"),
  code: Yup.string().required("Please enter a Code"),
  barcode: Yup.string().required("Barcode is Required"),
  category: Yup.string().required("Please select a Category"),
  cost: Yup.number().required("Please enter Cost"),
  price: Yup.number().required("Please enter Price"),
  taxMethod: Yup.string().required("Please select a Tax Method"),
  quantity: Yup.number()
    .required("Please enter Quantity")
    .min(1, "Quantity must be greater than 0"),
});

const productTypeOptions = [
  { key: "Standard", value: "standard" },
  { key: "Combo", value: "combo" },
  { key: "Digital", value: "digital" },
  { key: "Service", value: "service" },
];

const categoryOptions = [
  { key: "Beauty", value: "beauty" },
  { key: "Grocery", value: "grocery" },
  { key: "Food", value: "food" },
  { key: "Furniture", value: "furniture" },
  { key: "Shoes", value: "shoes" },
  { key: "Frames", value: "frames" },
  { key: "Jewellery", value: "jewellery" },
];

const taxMethodOptions = [
  { key: "Exclusive", value: "exclusive" },
  { key: "Inclusive", value: "inclusive" },
];

function AddProduct() {
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
              to="/products"
            >
              Products
            </Link>
            <Typography color="text.primary">New Product</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New Product</Typography>
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
                    control="select"
                    name="productType"
                    label="Product Type"
                    options={productTypeOptions}
                  />
                </Grid>

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
                    name="code"
                    label="Code"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="barcode"
                    label="Barcode"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="category"
                    label="Category"
                    options={categoryOptions}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="number"
                    name="cost"
                    label="Cost"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="number"
                    name="price"
                    label="Price"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="select"
                    name="taxMethod"
                    label="Tax Method"
                    options={taxMethodOptions}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="number"
                    name="quantity"
                    label="Quantity"
                  />
                </Grid>

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
                    control="textarea"
                    type="file"
                    name="description"
                    label="Description"
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

export default AddProduct;
