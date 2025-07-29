export default function LoadingState() {
  return (
    <div className="w-full h-fit bg-white rounded-md p-3">
      <div className="min-h-[679px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD5725]"></div>
          <p className="text-gray-600">Loading users...</p>
        </div>
      </div>
    </div>
  );
}
