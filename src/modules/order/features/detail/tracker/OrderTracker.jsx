import React from 'react';
import {MdCheckCircle, MdCancel} from 'react-icons/md';

export default function OrderTracker({currentStatus = 3, isCancel = false}) {
  const status = [
    {id: 1, label: 'Order Placed'},
    {id: 2, label: 'Processing'},
    {id: 3, label: 'Shipped'},
    // {id: 4, label: 'Cancelled'},
  ];

  //current stage
  return (
    <div className="flex justify-between items-center py-10 px-5">
      {status.map((item, index) => {
        const isCurrentOrPast = currentStatus >= item.id;
        const isCancelled = isCancel && item.id === 4;

        return (
          <React.Fragment key={item.id}>
            <div className="flex items-center">
              {/* Dot with Icon */}
              <div
                className={`h-8 w-8 flex justify-center items-center rounded-full ${
                  isCancelled
                    ? 'bg-red-500'
                    : isCurrentOrPast
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              >
                {/* Show check icon for completed steps, X icon for cancellation */}
                {isCancelled ? (
                  <MdCancel className="h-5 w-5 text-white" />
                ) : isCurrentOrPast ? (
                  <MdCheckCircle className="h-5 w-5 text-white" />
                ) : null}
              </div>

              {/* Line connector */}
              {index < status.length - 1 && (
                <div
                  className={`flex-grow h-1 ${
                    isCancelled
                      ? 'bg-red-500'
                      : currentStatus > item.id
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                ></div>
              )}
            </div>

            {/* Label */}
            <p
              className={`text-sm font-medium pt-2 text-center ${
                isCancelled
                  ? 'text-red-500'
                  : isCurrentOrPast
                  ? 'text-green-500'
                  : 'text-gray-500'
              }`}
            >
              {item.label}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
}
