import {Link, useNavigate} from 'react-router-dom';

import useLoading from '../../../../shared/hooks/useLoading';
import useOrder from '../../../../shared/hooks/';

import ActiveButton from '../../../components/ActiveButton';
import PaymentBankTransferItem from './items/PaymentBankTransferItem';

import {
  HOME,
  CHECKOUT_SERVICES,
} from '../../../../shared/services/config/routing';

export default function PaymentBankTransfer() {
  const {startLoading, stopLoading} = useLoading();
  const navigate = useNavigate();
  //do tomorrow
  //order create
  //amount
  //start and stop loading
  //navigate

  //handle submit order
  ///Order Success ,Order Failed
  //redirect menu home or go to order details
  const handlePlaceOrder = async () => {
    startLoading();
    try {
      //   const data = {totalAmount: amount.totalAmount, subTotal: amount.subTotal};
      //   await createOrder(data);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
      navigate(HOME);
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
                // onClick={handlePlaceOrder}
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
