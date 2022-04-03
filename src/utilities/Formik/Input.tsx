import { Field } from "formik";
import { InputLabel, TextField } from "@mui/material";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

interface FieldProps {
  field: any;
  form: any;
}

function Input({ label, type, name, ...rest }: InputProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <>
            {type === "file" && (
              <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            )}
            <TextField
              error={Boolean(form.touched[name] && form.errors[name])}
              id="outlined-basic"
              label={type !== "file" ? label : undefined}
              type={type}
              {...rest}
              {...field}
              fullWidth
              helperText={
                form.touched[name] && form.errors[name] && form.errors[name]
              }
            />
          </>
        );
      }}
    </Field>
  );
}

export default Input;
