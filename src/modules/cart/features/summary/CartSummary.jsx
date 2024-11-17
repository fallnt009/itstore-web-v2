import {Link, useNavigate} from 'react-router-dom';
import {NumericFormat} from 'react-number-format';
import {toast} from 'react-toastify';

import useCheckout from '../../../shared/hooks/useCheckout';
import useLoading from '../../../shared/hooks/useLoading';

import {CHECKOUT_DETAIL} from '../../../shared/services/config/routing';

const DELIVERY_FEE = 0;
const VAT_PERCENTAGE = 7;

export default function CartSummary({cart, totalItems}) {
  const {createCheckout} = useCheckout();
  const {startLoading, stopLoading} = useLoading();

  const navigate = useNavigate();

  const priceCalculator = () => {
    return cart.reduce((total, item) => {
      const discountPercentage =
        item?.Product?.ProductDiscount?.Discount?.amount || 0;
      const price = parseFloat(item?.Product?.price || 0);
      const discountedPrice = price - (price * discountPercentage) / 100;
      return total + discountedPrice * (item?.qty || 1);
    }, 0);
  };

  //define delivery and vat price
  const vatPrice = (priceCalculator() + DELIVERY_FEE) * (VAT_PERCENTAGE / 100);
  //Calculate total
  const realTotal = priceCalculator() + DELIVERY_FEE + vatPrice;

  const handleOnClickCart = async (e) => {
    e.preventDefault();
    startLoading();
    try {
      await createCheckout();
      navigate(CHECKOUT_DETAIL);
      navigate(0);
    } catch (err) {
      toast.error(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="py-12 select-none">
      <div className=" flex flex-col px-7">
        <div className="text-2xl font-semibold">Cart Summary</div>
        {/* Show product and price */}
        <div className=" text-stone-700 text-md mt-5 ">
          <div className="flex justify-between">
            <div>Products ({totalItems})</div>
            {/* price total */}
            <div>
              <NumericFormat
                value={priceCalculator()}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
                thousandSeparator=","
                suffix=" THB"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>Delivery price</div>
            <div>
              <NumericFormat
                value={DELIVERY_FEE || 0}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
                thousandSeparator=","
                suffix=" THB"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>Vat {VAT_PERCENTAGE}%</div>
            <div>
              <NumericFormat
                value={vatPrice || 0}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
                thousandSeparator=","
                suffix=" THB"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-black mt-5 pt-5 text-2xl font-semibold items-baseline">
          <div>Total</div>
          <div className="flex gap-1 items-baseline">
            <div className="text-3xl">
              <NumericFormat
                value={realTotal}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
                thousandSeparator=","
              />
            </div>
            <div className=" flex text-sm items-end">THB</div>
          </div>
        </div>
        <div className="text-stone-700 text-sm mt-5 ">
          By clicking "check out" to proceed your order
        </div>
        {/* if Cart empty cannot proceed payment */}
        <Link
          className="flex justify-center font-bold text-sm bg-indigo-700 border px-6 py-5 rounded-full text-white mt-5 hover:bg-white hover:text-indigo-700 hover:border-indigo-700"
          onClick={handleOnClickCart}
        >
          <div className="text-lg">Go to Checkout</div>
        </Link>
      </div>
    </div>
  );
}
