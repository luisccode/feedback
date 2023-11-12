import { UseFormRegister } from "react-hook-form";

export interface CheckboxProps {
  id: string;
  className?: string;
  label: string;
  name: string;
  defaultValue?: boolean;
  register: UseFormRegister<FieldValues>;
}
