import React from 'react';

export default function OrderPaymentStatus({UserPayment}) {
  const {Payment, paymentStatus} = UserPayment || {};
  const paymentName = Payment?.name || 'N/A';

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
