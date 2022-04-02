import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

interface optionsProps {
  key: string;
  value: string;
}

interface RadioButtonsProps {
  label: string;
  name: string;
  options?: optionsProps[];
}

interface FieldProps {
  field: any;
  form: any;
}

function RadioButtons({ label, name, options, ...rest }: RadioButtonsProps) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <FormControl
            fullWidth
            error={Boolean(form.touched[name] && form.errors[name])}
          >
            <FormLabel id="demo-simple-select-label">{label}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={field.value}
              {...rest}
              {...field}
              color="success"
            >
              {options &&
                options.map((option) => {
                  return (
                    <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={option.key}
                      key={option.key}
                    />
                  );
                })}
            </RadioGroup>
            {form.touched[name] && form.errors[name] && (
              <FormHelperText>{form.errors[name]}</FormHelperText>
            )}
          </FormControl>
        );
      }}
    </Field>
  );
}

export default RadioButtons;
