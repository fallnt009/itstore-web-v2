import React from 'react';

export default function BankTransferAccount() {
  return (
    <>
      <div className="flex flex-col gap-3 pt-5">
        <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
          <div className="flex flex-col gap-3 py-2">
            <div className="flex justify-between">
              <h1 className="text-gray-500">Bank Name</h1>
              <p className="text-gray-800 font-semibold">
                Siam Commercial Bank
              </p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-500">Account Number</h1>
              <p className="text-gray-800 font-semibold">000-0000-00</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-500">Merchant Name</h1>
              <p className="text-gray-800 font-semibold">ITStore INC</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 font-semibold">
        OR
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
          <div className="flex flex-col gap-3 py-2">
            <div className="flex justify-between">
              <h1 className="text-gray-500">Bank Name</h1>
              <p className="text-gray-800 font-semibold">Kasikorn Bank</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-500">Account Number</h1>
              <p className="text-gray-800 font-semibold">000-0000-00</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-500">Merchant Name</h1>
              <p className="text-gray-800 font-semibold">ITStore INC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
