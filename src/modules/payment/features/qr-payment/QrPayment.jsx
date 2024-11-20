import useUserPayment from '../../hooks/useUserPayment';

import QrPaymentContent from './content/QrPaymentContent';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function QrPayment() {
  const {
    selectImage,
    orderNumber,
    amount,
    error,
    errorStatus,
    submitPaymentImage,
    updateUserPaymentAwait,
  } = useUserPayment();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10 my-5">
      <div className="bg-gray-100 rounded-lg py-10">
        <QrPaymentContent
          orderNumber={orderNumber}
          amount={amount}
          selectImage={selectImage}
          onSubmitImage={submitPaymentImage}
          onUpdatePayment={updateUserPaymentAwait}
        />
      </div>
    </div>
  );
}
