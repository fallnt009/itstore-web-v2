import PaymentSelectBox from './selection/PaymentSelectBox';

export default function PaymentSelection({
  paymentMethod,
  orderNumber,
  onSelect,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 pb-5 select-none">
        <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        <h2 className="text-gray-600">Select your payment options</h2>
      </div>
      <div className="flex rounded-lg border p-2 w-1/2 justify-between bg-gray-100 border-gray-100 font-semibold">
        <h1>Order Number</h1>
        <p>{orderNumber}</p>
      </div>
      <div className="flex flex-col gap-3 pt-5 w-1/2">
        {paymentMethod.map((payment) => (
          <PaymentSelectBox
            key={payment.id}
            id={payment.id}
            name={payment.name}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
