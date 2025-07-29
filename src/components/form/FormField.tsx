import type { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
  error?: string;
  className?: string;
}

export function FormField({ children, error, className = "" }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
