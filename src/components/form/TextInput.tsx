import { forwardRef } from "react";
import { FormField } from "./FormField";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <FormField error={error}>
        <label htmlFor={id} className="font-bold text-sm">
          {label}
        </label>
        <input ref={ref} id={id} className={`form-input ${className}`} {...props} />
      </FormField>
    );
  }
);

TextInput.displayName = "TextInput";
