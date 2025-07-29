interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="w-full h-fit bg-[#EBF9F1] rounded-[22px] flex items-center justify-center px-3 py-2">
      <p className="font-medium text-xs text-[#1F9254]">{status}</p>
    </div>
  );
}
