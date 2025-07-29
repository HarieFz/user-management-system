export default function EmptyState() {
  return (
    <div className="w-full h-fit bg-white rounded-md p-3">
      <div className="min-h-[679px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-gray-400 text-4xl">📭</div>
          <p className="text-gray-600 font-medium">No users found</p>
          <p className="text-gray-500 text-sm">There are no users to display at the moment.</p>
        </div>
      </div>
    </div>
  );
}
