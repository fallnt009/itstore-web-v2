export default function TimelineTracking() {
  //date that stamp
  //- Order created January 8,2024 at 9:48 pm
  //- ฿1,535 payment was proceed on QR with proof
  // -You completed the payment for this order
  // -You send invoice to email
  // - You completed this order

  //today
  // and other dates
  return (
    <div className="py-5">
      <div className="px-5 mx-auto mt-0 bg-white">
        <div className="my-4">
          <span className="p-1 bg-gray-100 rounded-lg font-medium text-xs">
            Today
          </span>
        </div>
        <div className="grid grid-cols-[3px,1fr] my-0 mx-auto text-gray-700">
          {/* timeline middle */}
          <div className="bg-gray-200 relative">
            {/* timeline point */}
            <div className="absolute h-[15px] w-[15px] rounded-full top-1 left-[50%] bg-indigo-600 -translate-x-[50%]"></div>
          </div>

          <div className="flex justify-between mb-5 mx-5 mt-0">
            <h1 className="text-base">This order was created</h1>
            <p>Just now</p>
          </div>
        </div>
        <div className="grid grid-cols-[3px,1fr]  text-gray-700">
          {/* timeline middle */}
          <div className="bg-gray-200 relative">
            {/* timeline point */}
            <div className="absolute h-[15px] w-[15px] rounded-full top-1 left-[50%] bg-indigo-600 -translate-x-[50%]"></div>
          </div>
          <div className="flex justify-between mb-5 mx-5 mt-0">
            <h1 className="text-base">
              ฿1,535 payment was proceed on QR with proof
            </h1>
            <p>Just now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
