import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  date: "",
  referenceNo: "",
  biller: "",
  customer: "",
  orderTax: "",
  orderDiscount: "",
  shipping: "",
  document: "",
  saleStatus: "",
  paymentStatus: "",
  saleNotes: "",
};

const validationSchema = Yup.object({
  date: Yup.date()
    .typeError("Please Select a Valid Date")
    .required("Date is Required"),
  referenceNo: Yup.string().required("Reference Number is Required"),
  biller: Yup.string().required("Please Select Biller"),
  customer: Yup.string().required("Please Select Customer"),
  orderTax: Yup.string().required("Please Select Tax"),
  orderDiscount: Yup.number().required("Please Enter Order Discount"),
  saleStatus: Yup.string().required("Please select Sale Status"),
  paymentStatus: Yup.string().required("Please Select Payment Status"),
  saleNotes: Yup.string().required("Sales Notes Required"),
});

const billerOptions = [
  { key: "Biller 1", value: "biller1" },
  { key: "Biller 2", value: "biller2" },
];

const customersList = [
  { key: "Customer 1", value: "customer1" },
  { key: "Customer 2", value: "customer2" },
  { key: "Customer 3", value: "customer3" },
];

const taxMethodOptions = [
  { key: "Exclusive", value: "exclusive" },
  { key: "Inclusive", value: "inclusive" },
];

const statusOptions = [
  { key: "Completed", value: "completed" },
  { key: "Pending", value: "pending" },
];

const paymentOptions = [
  { key: "Paid", value: "paid" },
  { key: "Pending", value: "pending" },
];

function AddSale() {
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
              to="/sales"
            >
              Sales
            </Link>
            <Typography color="text.primary">New Sale</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New Sale</Typography>
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
                  <FormikControl control="date" name="date" label="Date" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="referenceNo"
                    label="Reference No"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="biller"
                    label="Biller"
                    options={billerOptions}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="customer"
                    label="Customer"
                    options={customersList}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="orderTax"
                    label="Order Tax"
                    options={taxMethodOptions}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="number"
                    name="orderDiscount"
                    label="Order Discount"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="textarea"
                    name="shipping"
                    label="Shipping"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="file"
                    name="document"
                    label="Attach Document"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="saleStatus"
                    label="Sale Status"
                    options={statusOptions}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="paymentStatus"
                    label="Payment Status"
                    options={paymentOptions}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="textarea"
                    name="saleNotes"
                    label="Sale Note"
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

export default AddSale;
