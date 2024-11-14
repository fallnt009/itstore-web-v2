import {useCallback, useState} from 'react';
import {toast} from 'react-toastify';
import {BsBank2} from 'react-icons/bs';

import SingleUploader from '../../../components/SingleUploader';

import PaymentContentHeader from '../../header/PaymentContentHeader';
import BankTransferAccount from './BankTransferAccount';

import DateTimeForm from '../../../components/DateTimeForm';
import PaymentStepForm from '../../../components/PaymentStepForm';

import {UNEXPECTED_ERROR} from '../../../../shared/services/config/toast';

export default function BankTransferContent({
  amount,
  orderNumber = '',
  selectImage,
  onSubmitImage,
  onUpdatePayment,
}) {
  const [input, setInput] = useState({date: '', time: ''});
  const [error, setError] = useState('');

  const {date, time} = input;

  const utcDateTimeString =
    date && time ? new Date(`${date}T${time}:00`).toISOString() : null;

  //validate Input
  const validateInputs = useCallback(() => {
    if (!date || !time) {
      setError('Please select both date and time.');
      return false;
    }

    // Check if the selected date is today or in the future
    const selectedDate = new Date(`${date}T${time}:00`);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setError('Please select a future date and time.');
      return false;
    }

    setError(''); // Clear state
    return true;
  }, [date, time]);

  //handle onchange
  const handleInputOnChange = useCallback((e) => {
    const {name, value} = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }, []);

  //handle input
  const handleSubmitUpdate = useCallback(async () => {
    if (validateInputs()) {
      try {
        await onUpdatePayment(utcDateTimeString);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    } else {
      return;
    }
  }, [validateInputs, onUpdatePayment, utcDateTimeString]);

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
            content={
              <DateTimeForm
                input={input}
                error={error}
                onChange={handleInputOnChange}
              />
            }
          />
          <PaymentStepForm
            step="3"
            title="Upload payment proof"
            status="optional"
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
                  onClick={handleSubmitUpdate}
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
