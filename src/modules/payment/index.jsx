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
    <div className="mx-10 mt-10 mb-40">
      <PaymentSelection
        paymentMethod={paymentMethod}
        orderNumber={orderNumber}
        onSelect={selectPaymentMethod}
      />
    </div>
  );
}
