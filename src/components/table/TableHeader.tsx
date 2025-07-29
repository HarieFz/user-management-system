const TABLE_HEADERS = [
  { key: "id", label: "Account ID", className: "text-center" },
  { key: "name", label: "Name", className: "" },
  { key: "date", label: "Date", className: "" },
  { key: "status", label: "Status", className: "text-center" },
  { key: "action", label: "Action", className: "text-center" },
] as const;

export default function TableHeader() {
  return (
    <div className="w-full flex items-center justify-between gap-4 p-4">
      {TABLE_HEADERS.map((header) => (
        <p key={header.key} className={`w-full font-bold text-sm text-black ${header.className}`}>
          {header.label}
        </p>
      ))}
    </div>
  );
}
