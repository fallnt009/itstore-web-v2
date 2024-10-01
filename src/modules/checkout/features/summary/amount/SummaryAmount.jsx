import {NumericFormat} from 'react-number-format';

export default function SummaryAmount({
  totalPrice = 0,
  vatAmount = 0,
  itemsPrice = 0,
  serviceFee = 0,
}) {
  return (
    <>
      <div className="flex  justify-between font-semibold">
        <h4>Sub Total</h4>
        <h4>
          <NumericFormat
            value={itemsPrice}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType="text"
            thousandSeparator=","
            suffix=" THB"
          />
        </h4>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-stone-600">Vat</p>
        <p className="text-sm text-stone-600">
          <NumericFormat
            value={vatAmount}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType="text"
            thousandSeparator=","
            suffix=" THB"
          />
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-stone-600">Delivery Fee</p>
        <p className="text-sm text-stone-600">
          <NumericFormat
            value={serviceFee}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType="text"
            thousandSeparator=","
            suffix=" THB"
          />
        </p>
      </div>
      <div className="flex  justify-between font-semibold">
        <h4> Total Price</h4>
        <h4>
          <NumericFormat
            value={totalPrice}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType="text"
            thousandSeparator=","
            suffix=" THB"
          />
        </h4>
      </div>
    </>
  );
}
