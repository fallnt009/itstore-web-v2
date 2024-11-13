import {BsBank2} from 'react-icons/bs';

import SingleUploader from '../../../components/SingleUploader';

import PaymentContentHeader from '../../header/PaymentContentHeader';
import BankTransferAccount from './BankTransferAccount';

import DateTimeForm from '../../../components/DateTimeForm';
import PaymentStepForm from '../../../components/PaymentStepForm';

export default function BankTransferContent({
  amount,
  orderNumber = '',
  selectImage,
  onSubmitImage,
  onSubmitDateTime,
  onUpdatePayment,
}) {
  //handle check every input if is made requried
  return (
    <div className="sm:px-14 md:px-36 xl:px-80">
      <PaymentContentHeader
        title="BANK TRANSFER PAYMENT"
        icon={<BsBank2 />}
        orderNumber={orderNumber}
        amount={amount}
      />
      <div className=" p-4 bg-gray-100">
        <div className="flex flex-col justify-center gap-5">
          <PaymentStepForm
            step="1"
            title="Transfer money to make payment"
            content={<BankTransferAccount />}
          />
          <PaymentStepForm
            step="2"
            title="Fill your information"
            content={<DateTimeForm onSubmit={onSubmitDateTime} />}
          />
          <PaymentStepForm
            step="3"
            title="Upload payment proof"
            content={
              <SingleUploader select={selectImage} onSubmit={onSubmitImage} />
            }
          />
          <PaymentStepForm
            step="4"
            title="Finish Payment"
            content={
              <div className="flex flex-col gap-5 justify-center pt-5">
                <button
                  type="button"
                  className="p-2 border rounded-lg border-yellow-400 bg-yellow-400 w-full font-semibold hover:bg-opacity-80"
                  onClick={onUpdatePayment}
                >
                  I have paid
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
