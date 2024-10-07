export default function OrderTracker({currentStatus = 4, isCancel = true}) {
  const status = [
    {id: 1, label: 'Order Placed'},
    {id: 2, label: 'Processing'},
    {id: 3, label: 'Shipped'},
    {id: 4, label: 'Cancelled'},
  ];

  //current stage
  return (
    <div className="flex justify-between items-center py-10 px-5">
      {status.map((item, index) => (
        <>
          <div key={item.id} className="flex flex-col items-center border">
            {/* dot and */}
            <div
              className={`h-8 w-8 flex justify-center items-center rounded-full ${
                isCancel && item.id === 4
                  ? 'bg-red-500'
                  : currentStatus >= item.id
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            ></div>

            {/* label */}
            <p
              className={`text-sm font-medium pt-2 ${
                isCancel && item.id === 4
                  ? 'text-red-500'
                  : currentStatus >= item.id
                  ? 'text-green-500'
                  : 'text-gray-500'
              }`}
            >
              {item.label}
            </p>
          </div>
          <div className="pb-7 border">
            {/* line connect */}
            {index < status.length - 1 && (
              <div
                className={`w-48 h-1 ${
                  isCancel && item.id === 4
                    ? 'bg-red-500'
                    : currentStatus > item.id
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              >
                {item.id} {isCancel}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
