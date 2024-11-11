import PaymentSelectBox from './selection/PaymentSelectBox';

export default function PaymentSelection({
  paymentMethod,
  selectedPaymentId,
  onSelect,
}) {
  //selected

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        <h2>#ORDER NUMBER</h2>
      </div>
      <div className="flex flex-col gap-3 w-1/2 pt-5">
        {paymentMethod.map((payment) => (
          <PaymentSelectBox
            key={payment.id}
            id={payment.id}
            name={payment.name}
            selected={selectedPaymentId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
