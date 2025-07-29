interface ErrorStateProps {
  error: unknown;
  onRetry?: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  const errorMessage = error instanceof Error ? error.message : "Something went wrong";

  return (
    <div className="w-full h-fit bg-white rounded-md p-3">
      <div className="min-h-[679px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-red-500 text-4xl">⚠️</div>
          <p className="text-red-600 font-medium">Error loading users</p>
          <p className="text-gray-600 text-sm">{errorMessage}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-[#FD5725] text-white rounded-md hover:bg-[#FD5725]/90 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
