import React from 'react';

export default function OrderPaymentStatus({UserPayment}) {
  const paymentName = UserPayment?.Payment?.name;
  const paymentStatus = UserPayment?.paymentStatus;

  return (
    <div>
      <h4 className="font-semibold">Payment</h4>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Payment method</p>
        <div className="py-2">
          <p>{paymentName}</p>
        </div>
      </div>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Payment status</p>
        <div className="py-2">
          <p>{paymentStatus}</p>
        </div>
      </div>
    </div>
  );
}
