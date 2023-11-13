import { UseFormRegister } from "react-hook-form";

export interface TextAreaProps {
  className?: string;
  placeholder: string;
  name: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
}
