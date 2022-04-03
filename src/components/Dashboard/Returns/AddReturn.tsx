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
  returnNote: "",
};

const validationSchema = Yup.object({
  date: Yup.date()
    .typeError("Please Select a Valid Date")
    .required("Date is Required"),
  referenceNo: Yup.string().required("Reference No Required"),
  biller: Yup.string().required("Please select a Biller"),
  customer: Yup.string().required("Please Select a Customer"),
  orderTax: Yup.string().required("Please Select Order Tax"),
  orderDiscount: Yup.number().required("Order Discount Required "),
  returnNote: Yup.string().required("Please enter Return Note"),
});

const customersList = [
  { key: "customer 1", value: "customer1" },
  { key: "customer 2", value: "customer2" },
];

const billerList = [
  { key: "biller 1", value: "biller1" },
  { key: "biller 2", value: "biller2" },
];

const taxMethodOptions = [
  { key: "Exclusive", value: "exclusive" },
  { key: "Inclusive", value: "inclusive" },
];

function AddReturn() {
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
                    options={billerList}
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
                    control="input"
                    type="text"
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

                <Grid item xs={12}>
                  <FormikControl
                    control="textarea"
                    name="returnNote"
                    label="Return Note"
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

export default AddReturn;
