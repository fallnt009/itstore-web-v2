export default function TrackingOrderLoading() {
  return (
    <div className="animate-pulse">
      <div>
        <div className="h-[75vh] bg-gray-200"></div>
        <div className="grid grid-cols-2 py-5">
          <div className="h-64 bg-gray-200"></div>
          <div className="h-64  bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="h-64 bg-gray-200"></div>
          <div className="h-64 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
