import { Field } from "formik";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";

interface optionsProps {
  key: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  options?: optionsProps[];
}

interface FieldProps {
  field: any;
  form: any;
}

function SelectField({ label, name, options, ...rest }: SelectProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <FormControl
            fullWidth
            error={Boolean(form.touched[name] && form.errors[name])}
          >
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={field.value}
              label={label}
              {...rest}
              {...field}
            >
              {options &&
                options.map((option: any) => {
                  return (
                    <MenuItem value={option.value} key={option.key}>
                      {option.key}
                    </MenuItem>
                  );
                })}
            </Select>
            {form.touched[name] && form.errors[name] && (
              <FormHelperText>{form.errors[name]}</FormHelperText>
            )}
          </FormControl>
        );
      }}
    </Field>
  );
}

export default SelectField;
