import React from 'react';

export default function BankTransferPayment() {
  //fetch userPayment
  //update user payment
  //Choose payment -> create order -> actual payment pay -> payment success waiting
  return (
    <div className="px-10 py-10">
      <div className="border p-4 bg-gray-100">
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
              <div className="flex justify-center py-5">QR CODE</div>
              <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
                <div className="flex flex-col gap-3 pt-2 pb-5">
                  <div className="flex justify-between">
                    <h1 className="text-gray-500">Merchant Name</h1>
                    <p className="text-gray-800 font-semibold">
                      Antonio Galvez
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-gray-500">Reference</h1>
                    <p className="text-gray-800 font-semibold">004499532135</p>
                  </div>
                </div>
                <div className="pt-4 pb-1 border-t font-semibold">
                  This is only for testing purpose
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
                REQUIRED
              </div>
            </div>
            <div className="pt-5">
              <div className="border-2 border-dashed rounded-lg p-2 py-5 hover:bg-blue-100 cursor-pointer">
                <div className="flex justify-center py-12">
                  <span>%PICTURE ICON%</span>
                </div>
                <div>
                  <h1 className="text-lg font-semibold ">
                    Drag a file here or click to select one
                  </h1>
                  <p className="text-sm text-gray-500">
                    Attach bank receipt or transaction screenshot for fast
                    confirmation. File should not exceed 5 mb.
                  </p>
                </div>
              </div>
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
                <button className="p-2 border rounded-lg border-yellow-400 bg-yellow-400 w-full font-semibold hover:bg-opacity-80">
                  Submit Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
