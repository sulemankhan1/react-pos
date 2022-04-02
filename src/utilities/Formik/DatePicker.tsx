import React from "react";
import { Field } from "formik";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { format } from "date-fns";

interface SelectProps {
  label: string;
  name: string;
  inputFormat?: string;
}

interface FieldProps {
  field: any;
  form: any;
}

function CheckboxGroup({
  label,
  name,
  inputFormat = "mm/dd/yyyy",
  ...rest
}: SelectProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <FormControl
            component="fieldset"
            variant="standard"
            error={Boolean(form.touched[name] && form.errors[name])}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={label}
                value={field.value}
                inputFormat={inputFormat}
                {...rest}
                onChange={(newValue) => {
                  form.setFieldValue(name, newValue);
                }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    {...field}
                    error={Boolean(form.touched[name] && form.errors[name])}
                  />
                )}
              />
            </LocalizationProvider>
            {form.touched[name] && form.errors[name] && (
              <FormHelperText>{form.errors[name]}</FormHelperText>
            )}
          </FormControl>
        );
      }}
    </Field>
  );
}

export default CheckboxGroup;
