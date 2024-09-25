import React from 'react';

export default function StockStatus({qtyInStock}) {
  return (
    <>
      {qtyInStock === 0 ? (
        <div className="flex items-center">
          <span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>
          Out of stock
        </div>
      ) : (
        <div className="flex items-center">
          <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
          In Stock {qtyInStock} items
        </div>
      )}
    </>
  );
}
