import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {MdQrCode2} from 'react-icons/md';

import usePayment from '../../../shared/hooks/usePayment';

import QrPaymentHeader from './header/QrPaymentHeader';

import SingleUploader from '../../components/SingleUploader';

export default function QrPayment() {
  //useLoaction get state that orderId:1
  const {userPayment, fetchUserPaymentByOrderId} = usePayment();
  const location = useLocation();

  //state
  const [selectImage, setSelectImage] = useState([]);

  //destructuring
  const {id, amount} = userPayment;
  const orderId = location.state.orderId;
  //useEffect
  useEffect(() => {
    const loadUserPayment = async () => {
      try {
        await fetchUserPaymentByOrderId(orderId);
      } catch (err) {
        console.log(err);
      }
    };
    loadUserPayment();
  }, [fetchUserPaymentByOrderId]);

  //create order
  //get order back and use order
  //handlesubmit
  const handleSubmitUpdateUserPayment = () => {
    try {
      //call api with userPaymentId
      //success
      //navigate to success
    } catch (err) {
      //unexpected error
    }
  };
  console.log(selectImage);

  return (
    <div className="px-10 py-20">
      <div className="p-4 bg-gray-100">
        <div className="sm:px-14 md:px-36 xl:px-80">
          <QrPaymentHeader amount={amount} />
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
                      <p className="text-gray-800 font-semibold">
                        Antonio Galvez
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-gray-500">Reference</h1>
                      <p className="text-gray-800 font-semibold">
                        004499532135
                      </p>
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
                <SingleUploader
                  select={selectImage}
                  setSelect={setSelectImage}
                />
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
    </div>
  );
}
