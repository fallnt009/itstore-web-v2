import {useEffect} from 'react';

import useCheckout from '../../../shared/hooks/useCheckout';

import SummaryAddress from './address/SummaryAddress';
import SummaryAmount from './amount/SummaryAmount';
import SummaryService from './service/SummaryService';
import SummaryProductList from './product-list/SummaryProductList';

export default function CheckoutSummary({defaultAddress, userCart}) {
  const {checkout} = useCheckout();

  const {Service} = checkout;

  const serviceFee = Service?.price;

  //Calculate total price and items
  const itemsPrice = userCart.reduce(
    (total, item) => total + parseFloat(item.Product.price) * item.qty,
    0
  );
  //Define delivery and vat price
  const vatAmount = Number(itemsPrice) * (7 / 100);
  //Calculate total
  const totalPrice =
    Number(itemsPrice) + Number(serviceFee) + Number(vatAmount);

  //send totalamount to the state
  // useEffect(() => {
  //   getTotalAmount(totalPrice, itemsPrice);
  // }, [totalPrice, itemsPrice, getTotalAmount]);

  return (
    <div className="container">
      <div className="flex flex-col gap-5 mx-5 ">
        <div className="flex flex-col gap-2 py-4">
          <SummaryAmount
            totalPrice={totalPrice}
            vatAmount={vatAmount}
            itemsPrice={itemsPrice}
            serviceFee={serviceFee}
          />
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Information</h4>
          <div>
            <SummaryAddress defaultAddress={defaultAddress} />
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Method</h4>
          <div>
            <SummaryService checkoutService={Service} />
          </div>
        </div>
        <SummaryProductList userCart={userCart} />
      </div>
    </div>
  );
}
