import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouteLink } from "react-router-dom";
import { Grid, Typography, Button, Breadcrumbs, Link } from "@mui/material";

import FormikControl from "../../../utilities/Formik/FormikControl";

const initialValues = {
  date: "",
  purchaseNo: "",
  supplier: "",
  received: "",
  orderTax: "",
  discount: "",
  shipping: "",
  payment: "",
  note: "",
};

const validationSchema = Yup.object({
  date: Yup.date()
    .typeError("Please Select a Valid Date")
    .required("Date is Required"),
  purchaseNo: Yup.string().required("Purchase Number is Required"),
  supplier: Yup.string().required("Supplier is Required"),
  received: Yup.string().required("Please choose an option"),
  orderTax: Yup.string().required("Please select Order Tax"),
  discount: Yup.number().required("Please enter Discount"),
  shipping: Yup.string().required("Shipping Required"),
  payment: Yup.number().required("Please enter a valid Payment Amount"),
  note: Yup.string().required("Note is Required"),
});

const suppliersList = [
  { key: "supplier 1", value: "supplier1" },
  { key: "supplier 2", value: "supplier2" },
];

const receiveOptions = [
  { key: "Received", value: "received" },
  { key: "Not Received Yet", value: "notReceived" },
];

const taxMethodOptions = [
  { key: "Exclusive", value: "exclusive" },
  { key: "Inclusive", value: "inclusive" },
];

function AddPurchase() {
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
              to="/purchases"
            >
              Purchases
            </Link>
            <Typography color="text.primary">New Purchase</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container mb={2}>
          <Grid item>
            <Typography variant="h5">Add New Purchase</Typography>
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
                  <FormikControl control="date" name="date" label="Date" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="purchaseNo"
                    label="Purchase Number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="supplier"
                    label="Supplier"
                    options={suppliersList}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    name="received"
                    label="Received"
                    options={receiveOptions}
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
                    name="discount"
                    label="Discount"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="shipping"
                    label="Shipping"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="payment"
                    label="Payment"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikControl control="textarea" name="note" label="Note" />
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

export default AddPurchase;
