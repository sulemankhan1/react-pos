import { Field } from "formik";
import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

interface FieldProps {
  field: any;
  form: any;
}

function Input({ label, name, ...rest }: InputProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <TextField
            error={Boolean(form.touched[name] && form.errors[name])}
            id="outlined-basic"
            label={label}
            {...rest}
            {...field}
            fullWidth
            helperText={
              form.touched[name] && form.errors[name] && form.errors[name]
            }
          />
        );
      }}
    </Field>
  );
}

export default Input;
