import { Field } from "formik";
import { TextField } from "@mui/material";

interface TextareaProps {
  label: string;
  name: string;
  type?: string;
  rows?: number;
}

interface FieldProps {
  field: any;
  form: any;
}

function Textarea({ label, name, rows, ...rest }: TextareaProps) {
  // console.log("rows: ", rows);
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <TextField
            error={Boolean(form.touched[name] && form.errors[name])}
            id="outlined-basic"
            label={label}
            multiline
            rows={rows ? rows : 3}
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

export default Textarea;
