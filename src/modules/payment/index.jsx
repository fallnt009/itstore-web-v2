import usePaymentGateway from './hooks/usePaymentGateway';

import PaymentSelection from './features/PaymentSelection';
import ErrorPage from '../shared/features/error/ErrorPage';
export default function PaymentContainer() {
  //fetch all payment
  const {
    paymentMethod,
    selectedPaymentId,
    error,
    errorStatus,
    selectPaymentMethod,
  } = usePaymentGateway();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }
  return (
    <div className="px-10 py-10">
      <PaymentSelection
        paymentMethod={paymentMethod}
        selectedPaymentId={selectedPaymentId}
        onSelect={selectPaymentMethod}
      />
    </div>
  );
}
