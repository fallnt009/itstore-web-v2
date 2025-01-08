//@ delete

import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useCheckout from '../../../shared/hooks/useCheckout';
import useOrder from '../../../shared/hooks/useOrder';

import CheckoutPaymentItem from './CheckoutPaymentItem';
import ActiveButton from '../../components/ActiveButton';
//routing
import {
  CHECKOUT_SERVICES,
  BANK_TRANSFER_PAYMENT,
  QR_PAYMENT,
} from '../../../shared/services/config/routing';

import {UNEXPECTED_ERROR} from '../../../shared/services/config/toast';

export default function CheckoutPayment() {
  const {amount, checkout, updateCheckout} = useCheckout();
  const {createOrder} = useOrder();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState(null);

  const {item, payment} = checkout;
  const {totalPrice, subTotal} = amount;

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
    try {
      //data
      const checkoutData = {paymentId: selectedPayment.id};
      const orderData = {totalAmount: totalPrice, subTotal: subTotal};
      //update checkout
      await updateCheckout(item.id, checkoutData);
      //create order
      const order = await createOrder(orderData);
      const orderId = order.id;
      //setprocess complete to make sure no one can access the route

      //payment redirect
      switch (selectedPayment?.id) {
        case 1:
          navigate(BANK_TRANSFER_PAYMENT, {state: {orderId: orderId}});
          break;
        case 2:
          navigate(QR_PAYMENT, {state: {orderId: orderId}});
          break;
        default:
          return;
      }
    } catch (err) {
      //err
      toast.error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        </div>
        <div className="pt-5">
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
                className="flex justify-center py-4 px-5 border-black hover:text-indigo-700"
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
