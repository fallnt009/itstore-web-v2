import usePaymentGateway from './hooks/usePaymentGateway';

import PaymentSelection from './features/PaymentSelection';
import ErrorPage from '../shared/features/error/ErrorPage';

export default function PaymentContainer() {
  //fetch all payment
  const {paymentMethod, orderNumber, error, errorStatus, selectPaymentMethod} =
    usePaymentGateway();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }
  return (
    <div className="px-10 pt-10 pb-40">
      <PaymentSelection
        paymentMethod={paymentMethod}
        orderNumber={orderNumber}
        onSelect={selectPaymentMethod}
      />
    </div>
  );
}
