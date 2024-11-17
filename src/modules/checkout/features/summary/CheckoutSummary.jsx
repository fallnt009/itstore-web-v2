import {useEffect, useMemo} from 'react';

import useCheckout from '../../../shared/hooks/useCheckout';

import SummaryAddress from './address/SummaryAddress';
import SummaryAmount from './amount/SummaryAmount';
import SummaryService from './service/SummaryService';
import SummaryProductList from './product-list/SummaryProductList';

export default function CheckoutSummary({defaultAddress, userCart}) {
  const {checkout, getTotalAmount} = useCheckout();

  const {item} = checkout;

  //service item
  const {Service} = item;

  const serviceFee = Number(Service?.price || 0);

  //Calculate total price and items
  const priceCalculator = useMemo(() => {
    return userCart.reduce((total, item) => {
      const discountPercentage =
        item?.Product?.ProductDiscount?.Discount?.amount || 0;
      const price = parseFloat(item?.Product?.price || 0);
      const discountedPrice = price - (price * discountPercentage) / 100;
      return total + discountedPrice * (item?.qty || 1);
    }, 0);
  }, [userCart]);
  //Define delivery and vat price
  const vatAmount = useMemo(() => priceCalculator * 0.07, [priceCalculator]);

  const totalPrice = useMemo(
    () => priceCalculator + serviceFee + vatAmount,
    [priceCalculator, serviceFee, vatAmount]
  );
  //send totalamount to the state
  useEffect(() => {
    getTotalAmount(totalPrice, priceCalculator);
  }, [totalPrice, priceCalculator, getTotalAmount]);

  return (
    <div>
      <div className="flex flex-col gap-5 mx-5 ">
        <div className="flex flex-col gap-2 py-4">
          <SummaryAmount
            totalPrice={totalPrice}
            vatAmount={vatAmount}
            itemsPrice={priceCalculator}
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
