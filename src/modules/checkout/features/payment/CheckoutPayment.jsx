import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import useCheckout from '../../../shared/hooks/useCheckout';
import useLoading from '../../../shared/hooks/useLoading';

//constant
import {BANKTRANSFER} from '../../../shared/services/config/constants';
//routing
import {
  CHECKOUT_SERVICES,
  PAYMENT_TRANSFER,
} from '../../../shared/services/config/routing';

import CheckoutPaymentItem from './CheckoutPaymentItem';
import ActiveButton from '../../components/ActiveButton';

export default function CheckoutPayment() {
  const {checkout, updateCheckout} = useCheckout();
  const {startLoading, stopLoading} = useLoading();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState(null);

  const {item, payment} = checkout;
  //checkout item
  const {Payment} = item;

  //fetch payment everytime if checkout have payment id
  useEffect(() => {
    if (Payment) {
      setSelectedPayment(Payment);
    }
  }, [Payment]);

  //handle onClick update
  const handleOnClickPayment = async (item) => {
    setSelectedPayment(item);
  };

  const handleSubmitPayment = async () => {
    startLoading();
    try {
      //data
      const data = {paymentId: selectedPayment.id};
      const paymentName = payment.name;
      //api update
      await updateCheckout(item.id, data);
      //payment portal
      if (paymentName.toUpperCase() === BANKTRANSFER) {
        navigate(PAYMENT_TRANSFER);
        navigate(0);
      }
    } catch (err) {
      //err
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        </div>
        <div>
          {payment?.map((item) => (
            <CheckoutPaymentItem
              select={selectedPayment}
              payment={item}
              onClick={handleOnClickPayment}
              key={item.id}
            />
          ))}
          <div className="border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                select={selectedPayment}
                to={''}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={handleSubmitPayment}
              />

              <Link
                to={CHECKOUT_SERVICES}
                className="flex justify-center py-4 px-5 border-black "
              >
                Back to Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
