import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

interface optionsProps {
  key: string;
  value: string;
}

interface FormikControlProps {
  control: string;
  type?: string;
  label: string;
  name: string;
  variant?: string;
  options?: optionsProps[];
  rows?: number;
  inputFormat?: string;
}

function FormikControl({
  control,
  rows,
  options,
  inputFormat,
  ...rest
}: FormikControlProps) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea rows={rows} {...rest} />;
    case "select":
      return <Select options={options} {...rest} />;
    case "radio":
      return <RadioButtons options={options} {...rest} />;
    case "checkbox":
      return <CheckboxGroup options={options} {...rest} />;
    case "date":
      return <DatePicker inputFormat={inputFormat} {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
