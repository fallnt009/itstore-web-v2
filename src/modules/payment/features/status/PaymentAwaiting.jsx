import {useLocation, useNavigate} from 'react-router-dom';
import {MdReceipt} from 'react-icons/md';

import {ORDER_DETAIL} from '../../../shared/services/config/routing';

export default function PaymentAwaiting() {
  const location = useLocation();
  const navigate = useNavigate();

  const {orderNumber} = location.state;
  //see invoice by orderNumber

  const handleNavigateOrder = () => {
    navigate(ORDER_DETAIL(orderNumber));
  };
  return (
    <div className="pt-20 pb-40 px-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <span>
          <MdReceipt size={65} />
        </span>
        <h1 className="text-2xl font-semibold">
          Payment is awaiting confirmation
        </h1>
        <p className="text-gray-500">
          Your Payment is awaiting for confirmation. and will proceed shortly.
        </p>
      </div>
      <p className="flex justify-center py-5 text-gray-500">
        No # {orderNumber}
      </p>
      <div className="flex justify-center py-5">
        <button
          type="button"
          className="border p-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-opacity-80"
          onClick={handleNavigateOrder}
        >
          See your invoice
        </button>
      </div>
    </div>
  );
}
