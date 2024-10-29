import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useLoading from '../../../../shared/hooks/useLoading';
import useOrder from '../../../../shared/hooks/useOrder';
import useCheckout from '../../../../shared/hooks/useCheckout';

import ActiveButton from '../../../components/ActiveButton';
import PaymentBankTransferItem from './items/PaymentBankTransferItem';

import {
  CHECKOUT_SERVICES,
  ORDER_SUCCESS,
} from '../../../../shared/services/config/routing';

import {UNEXPECTED_ERROR} from '../../../../shared/services/config/toast';

export default function PaymentBankTransfer() {
  const {createOrder} = useOrder();
  const {amount, setProcessComplete} = useCheckout();
  const {startLoading, stopLoading} = useLoading();

  const navigate = useNavigate();

  const {totalPrice, subTotal} = amount;

  const handlePlaceOrder = async () => {
    startLoading();
    try {
      //amount price data
      const data = {totalAmount: totalPrice, subTotal: subTotal};
      //call api create and keep created order data in order state
      const order = await createOrder(data);

      const orderNum = order.OrderDetail.orderNumber;
      //set process complete to access success page
      setProcessComplete();
      //navigate
      navigate(ORDER_SUCCESS(orderNum));
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
      navigate(0);
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">Bank Transfer</h1>
        </div>
        <div>
          <PaymentBankTransferItem />

          <div className="flex flex-col gap-3 pt-10 font-semibold">
            <h1 className="text-xl">How to Pay</h1>
            <div className="flex flex-col gap-1 font-normal text-stone-600">
              <p>1. Open your mobile banking or doing at bank </p>
              <p>2. Make payment on menu Transfer and then. </p>
              <p>
                3. Fill Bank account number and total price that you want to
                pay.
              </p>
              <p>
                4. Make sure that Bank account number and Account name are the
                same on Website.
              </p>
              <p>5. After completed payment.Press Confirm Order.</p>
              <p>
                5. Please upload proof of payment on Our Website to Completed
                Your Order in 12 hours.
              </p>
            </div>
          </div>

          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                select={true}
                to={''}
                activeTitle="Confirm your order"
                inActiveTitle="Confirm your order"
                onClick={handlePlaceOrder}
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
