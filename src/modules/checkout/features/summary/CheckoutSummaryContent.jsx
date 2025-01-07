import {useMemo, useEffect} from 'react';

import {NumericFormat} from 'react-number-format';

export default function CheckoutSummaryContent({
  cartItemList,
  service = {},
  getTotalAmount,
}) {
  const serviceFee = Number(service?.price) || 0;

  //price calculator
  //total price ,vat amount and price cal servicefee
  const priceCalculator = useMemo(() => {
    return cartItemList.reduce((total, item) => {
      const discountPercentage =
        item?.Product?.ProductDiscount?.Discount?.amount || 0;
      const price = parseFloat(item?.Product?.price || 0);
      const discountedPrice = price - (price * discountPercentage) / 100;
      return total + discountedPrice * (item?.qty || 1);
    }, 0);
  }, [cartItemList]);

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
    <div className="flex flex-col gap-2 py-3 border-b">
      <div className="flex justify-between">
        <h1>Subtotal</h1>
        <NumericFormat
          value={priceCalculator || 0}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="flex justify-between">
        <h1>Delivery Fee</h1>
        <NumericFormat
          value={serviceFee || 0}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="flex justify-between">
        <h1>Vat 7%</h1>
        <NumericFormat
          value={vatAmount || 0}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="font-semibold text-black flex justify-between">
        <h1>Total</h1>
        <NumericFormat
          value={totalPrice || 0}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
    </div>
  );
}
