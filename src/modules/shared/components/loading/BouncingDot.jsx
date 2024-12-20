export default function BouncingDot() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen z-40 bg-white">
      <div className="flex space-x-2">
        <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce"></div>
        <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce2"></div>
        <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce"></div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
        <p className="text-sm text-gray-500">Your data is on its way!</p>
      </div>
    </div>
  );
}
