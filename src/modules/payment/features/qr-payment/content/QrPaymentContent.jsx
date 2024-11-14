import {MdQrCode2, MdOutlineQrCode2} from 'react-icons/md';

import PaymentContentHeader from '../../header/PaymentContentHeader';

import PaymentStepForm from '../../../components/PaymentStepForm';
import SingleUploader from '../../../components/SingleUploader';

export default function QrPaymentContent({
  amount,
  orderNumber = '',
  selectImage,
  onSubmitImage,
  onUpdatePayment,
}) {
  return (
    <div className="sm:px-14 md:px-36 xl:px-80">
      <PaymentContentHeader
        title="QR PAYMENT"
        icon={<MdOutlineQrCode2 />}
        orderNumber={orderNumber}
        amount={amount}
      />
      <div className="flex flex-col justify-center gap-5">
        <PaymentStepForm
          step="1"
          title="Scan QR code to make payment"
          status="required"
          content={
            <div className="pt-5">
              <div className="flex justify-center py-5">
                <MdQrCode2 size={200} />
              </div>
              <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
                <div className="flex flex-col gap-3 pt-2 pb-5">
                  <div className="flex justify-between">
                    <h1 className="text-gray-500">Merchant Name</h1>
                    <p className="text-gray-800 font-semibold">
                      Antonio Galvez
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-gray-500">Reference</h1>
                    <p className="text-gray-800 font-semibold">004499532135</p>
                  </div>
                </div>
                <div className="pt-4 pb-1 border-t font-semibold flex justify-between">
                  <h2>Order Number</h2>
                  <p>{orderNumber}</p>
                </div>
              </div>
            </div>
          }
        />
        {/* UPLOAD PAYMENT */}
        <PaymentStepForm
          step="2"
          title="Upload payment proof"
          status="optional"
          content={
            <SingleUploader select={selectImage} onSubmit={onSubmitImage} />
          }
        />

        {/* FINISH PAY */}
        <PaymentStepForm
          step="3"
          title="Finish Payment"
          content={
            <div className="flex flex-col gap-5 justify-center pt-5">
              <button
                type="button"
                className="p-2 border rounded-lg border-yellow-400 bg-yellow-400 w-full font-semibold hover:bg-opacity-80"
                onClick={() => onUpdatePayment()}
              >
                I have paid
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
}
