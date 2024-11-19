import {NumericFormat} from 'react-number-format';

export default function SummaryProductListItem({product, qty}) {
  const {title, price} = product;

  const priceCalculator = () => {
    const discountPercentage = product?.ProductDiscount?.Discount?.amount || 0;
    const basePrice = parseFloat(price || 0);
    const discountedPrice = basePrice - (basePrice * discountPercentage) / 100;
    return discountedPrice * (qty || 1);
  };

  return (
    <div className="border-b py-7 pr-2">
      <div className="flex justify-between ">
        <div className="font-semibold text-stone-600">{title}</div>
        <div className="font-semibold text-stone-600">
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
      <div className="flex gap-2 pt-3">
        <p className="text-stone-600">Qty :</p>
        {qty}
      </div>
    </div>
  );
}
