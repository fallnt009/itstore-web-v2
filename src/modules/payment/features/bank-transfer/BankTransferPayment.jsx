import useUserPayment from '../../hooks/useUserPayment';

import BankTransferContent from './contents/BankTransferContent';

import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function BankTransferPayment() {
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
    <div className="px-10 py-5">
      <div className="bg-gray-100 rounded-lg py-10">
        <BankTransferContent
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
