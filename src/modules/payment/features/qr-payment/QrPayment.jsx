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
    setSelectImage,
    updateUserPaymentAwait,
  } = useUserPayment();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="px-10 py-5">
      <div className="bg-gray-100 rounded-lg py-10">
        <QrPaymentContent
          orderNumber={orderNumber}
          amount={amount}
          selectImage={selectImage}
          setSelectImage={setSelectImage}
          updateUserPayment={updateUserPaymentAwait}
        />
      </div>
    </div>
  );
}
