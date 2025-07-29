import { forwardRef } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { FormField } from "./FormField";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showPassword: boolean;
  onToggleVisibility: () => void;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, id, showPassword, onToggleVisibility, className = "", ...props }, ref) => {
    return (
      <FormField error={error}>
        <label htmlFor={id} className="font-bold text-sm">
          {label}
        </label>
        <div className="relative w-full">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            id={id}
            className={`form-input !pr-11 !text-xs ${className}`}
            {...props}
          />
          <button
            type="button"
            onClick={onToggleVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            tabIndex={-1}
          >
            {showPassword ? <HiEye size={20} color="#FD5725" /> : <HiEyeSlash size={20} color="#FD5725" />}
          </button>
        </div>
      </FormField>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
