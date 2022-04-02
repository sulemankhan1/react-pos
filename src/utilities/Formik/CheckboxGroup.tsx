import { Field } from "formik";
import {
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
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

function CheckboxGroup({ label, name, options, ...rest }: SelectProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <FormControl
            component="fieldset"
            variant="standard"
            error={Boolean(form.touched[name] && form.errors[name])}
          >
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
              {options &&
                options.map((option) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          value={option.value}
                          checked={field.value.includes(option.value)}
                        />
                      }
                      label={option.key}
                      key={option.value}
                    />
                  );
                })}
            </FormGroup>
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
