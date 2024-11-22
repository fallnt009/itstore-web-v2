import {NumericFormat} from 'react-number-format';

export default function ProductInfoPrice({discount, price}) {
  //Discount
  const discountAmount = discount?.Discount?.amount;
  const discountPercentage = discountAmount / 100;

  const discountCal = Number(price) * discountPercentage;
  const discountPrice = price - discountCal;

  return (
    <>
      {discount ? (
        <div className="flex items-center gap-3 py-1">
          <p className="text-xs bg-red-500 text-white font-semibold p-1 rounded-lg">
            -{discountAmount} %
          </p>
          <div className="text-2xl font-bold text-indigo-600">
            <NumericFormat
              value={discountPrice}
              displayType="text"
              thousandSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="฿"
            />
          </div>
          <div className="text-sm line-through">
            <NumericFormat
              value={price}
              displayType="text"
              thousandSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="฿"
            />
          </div>
        </div>
      ) : (
        <div className="text-2xl font-bold">
          <NumericFormat
            value={price}
            displayType="text"
            thousandSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix="฿"
          />
        </div>
      )}
    </>
  );
}
