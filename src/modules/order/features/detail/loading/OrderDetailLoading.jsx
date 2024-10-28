export default function OrderDetailLoading() {
  return (
    <div className="animate-pulse">
      <div className="flex py-5 ">
        <div className="h-8 w-80 bg-gray-100"></div>
      </div>
      <div>
        <div className="h-[75vh] bg-gray-100"></div>
        <div className="grid grid-cols-2 py-5">
          <div className="h-64 bg-gray-100"></div>
          <div className="h-64  bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="h-64 bg-gray-100"></div>
          <div className="h-64 bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
