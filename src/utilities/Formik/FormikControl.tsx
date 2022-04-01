import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";

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
}

function FormikControl({
  control,
  rows,
  options,
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
    default:
      return null;
  }
}

export default FormikControl;
