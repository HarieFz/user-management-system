import { forwardRef } from "react";
import { FormField } from "./FormField";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ label, error, id, options, placeholder, ...props }, ref) => {
    return (
      <FormField error={error}>
        <label htmlFor={id} className="font-bold text-sm">
          {label}
        </label>
        <select ref={ref} id={id} className="form-input" {...props}>
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
    );
  }
);

SelectInput.displayName = "SelectInput";
