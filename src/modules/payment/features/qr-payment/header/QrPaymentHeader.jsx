import {MdOutlineQrCode2} from 'react-icons/md';

import {NumericFormat} from 'react-number-format';

export default function QrPaymentHeader({amount}) {
  return (
    <>
      <div className="flex items-center gap-2 text-gray-800 font-semibold">
        <span>
          <MdOutlineQrCode2 />
        </span>
        QR PAYMENT
      </div>
      <div className="flex flex-col justify-center items-center py-12 gap-2">
        <h1 className="text-gray-500">Amount to pay</h1>
        <h1 className="text-4xl font-bold">
          <NumericFormat
            value={amount || 0}
            displayType="text"
            thousandSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix="฿"
          />
        </h1>
      </div>
    </>
  );
}
