import {MdQrCode2, MdOutlineQrCode2} from 'react-icons/md';

import {NumericFormat} from 'react-number-format';

import SingleUploader from '../../../components/SingleUploader';

export default function QrPaymentContent({
  amount,
  orderNumber = '',
  selectImage,
  setSelectImage,
  updateUserPayment,
}) {
  return (
    <div className="sm:px-14 md:px-36 xl:px-80">
      <div className="flex items-center gap-2 text-gray-800 font-semibold">
        <span>
          <MdOutlineQrCode2 />
        </span>
        <h1>QR PAYMENT</h1>
        <p className="font-normal"># {orderNumber}</p>
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
      <div className="flex flex-col justify-center gap-5">
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex justify-between items-center select-none">
            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center bg-black rounded-full text-white h-8 w-8">
                1
              </span>
              <h1 className="font-bold">Scan QR code to make payment</h1>
            </div>
            <div className="border rounded-xl px-3 py-1 text-xs border-gray-100 bg-gray-200 text-gray-700 font-bold">
              REQUIRED
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-center py-5">
              <MdQrCode2 size={200} />
            </div>
            <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
              <div className="flex flex-col gap-3 pt-2 pb-5">
                <div className="flex justify-between">
                  <h1 className="text-gray-500">Merchant Name</h1>
                  <p className="text-gray-800 font-semibold">Antonio Galvez</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-gray-500">Reference</h1>
                  <p className="text-gray-800 font-semibold">004499532135</p>
                </div>
              </div>
              <div className="pt-4 pb-1 border-t font-semibold flex justify-between">
                <h2>Order Number</h2>
                <p>{orderNumber}</p>
              </div>
            </div>
          </div>
        </div>
        {/* UPLOAD PAYMENT */}
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex justify-between items-center select-none">
            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center bg-black rounded-full text-white h-8 w-8">
                2
              </span>
              <h1 className="font-bold">Upload payment proof</h1>
            </div>
            <div className="border rounded-xl px-3 py-1 text-xs border-gray-100 bg-gray-200 text-gray-700 font-bold">
              OPTIONAL
            </div>
          </div>
          <div className="pt-5">
            <SingleUploader select={selectImage} setSelect={setSelectImage} />
          </div>
        </div>
        {/* FINISH PAY */}
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex justify-between items-center select-none">
            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center bg-black rounded-full text-white h-8 w-8">
                2
              </span>
              <h1 className="font-bold">Finish Payment</h1>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-center">
              <button
                type="button"
                className="p-2 border rounded-lg border-yellow-400 bg-yellow-400 w-full font-semibold hover:bg-opacity-80"
                onClick={updateUserPayment}
              >
                I have paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
