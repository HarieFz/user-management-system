import { forwardRef, useState, useEffect } from "react";
import { HiCloudArrowUp } from "react-icons/hi2";
import { FormField } from "./FormField";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  placeholder?: string;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, error, id, placeholder = "Pilih file", accept, onChange, ...props }, ref) => {
    const [selectedFileName, setSelectedFileName] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      const file = fileList?.[0];

      if (file) {
        setSelectedFileName(file.name);
      } else {
        setSelectedFileName("");
      }

      // Call the original onChange if provided
      if (onChange) {
        onChange(event);
      }
    };

    // Reset filename when component receives new props (form reset)
    useEffect(() => {
      if (props.value === undefined || props.value === null) {
        setSelectedFileName("");
      }
    }, [props.value]);

    return (
      <FormField error={error}>
        <label htmlFor={id} className="font-bold text-sm">
          {label}
        </label>
        <input
          ref={ref}
          type="file"
          id={id}
          accept={accept}
          className="form-input py-3 hidden"
          onChange={handleFileChange}
          {...props}
        />
        <label htmlFor={id} className="form-input flex items-center justify-between gap-2 py-3 cursor-pointer">
          <p className={`w-full ${selectedFileName ? "text-gray-700" : "text-gray-400"}`}>
            {selectedFileName || placeholder}
          </p>
          <HiCloudArrowUp size={24} color="#FD5725" />
        </label>
      </FormField>
    );
  }
);

FileUpload.displayName = "FileUpload";
