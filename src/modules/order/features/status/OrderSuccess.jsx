import {useParams, useNavigate} from 'react-router-dom';
import {MdCheckCircle} from 'react-icons/md';

import {HOME, ORDER_DETAIL} from '../../../shared/services/config/routing';

export default function OrderSuccess() {
  const {orderNumber} = useParams();
  const navigate = useNavigate();

  const handleOnClickNavigate = (type) => {
    const navigationMap = {
      home: HOME,
      orderDetail: ORDER_DETAIL(orderNumber),
    };

    if (navigationMap[type]) {
      navigate(navigationMap[type]);
    }
  };

  return (
    <div className="px-10 py-40">
      <div className="flex flex-col justify-center items-center">
        <div className="text-green-500">
          <MdCheckCircle size={65} />
        </div>
        <div className="pt-8">
          <h1 className="flex justify-center font-semibold text-2xl">
            Thank you for your purchase
          </h1>
          <p className="text-gray-500">
            We've already received your order will proceed shortly.
          </p>
        </div>
        <div className="py-4 text-gray-500">
          <h1>Your order number is {orderNumber}</h1>
        </div>
        <div className="flex gap-3 pt-5">
          <button
            type="button"
            className="p-2 px-4 border rounded-lg hover:border-indigo-700 hover:text-white hover:bg-indigo-700"
            onClick={() => handleOnClickNavigate('home')}
          >
            Go back to Home
          </button>
          <button
            type="button"
            className="p-2 px-4 border rounded-lg hover:border-indigo-700 hover:text-white hover:bg-indigo-700"
            onClick={() => handleOnClickNavigate('orderDetail')}
          >
            See your order
          </button>
        </div>
      </div>
    </div>
  );
}
