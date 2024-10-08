// import {format} from 'date-fns';
import OrderTracker from '../tracker/OrderTracker';

import {convertToLocalTime} from '../../../../shared/utils/toLocalTime';

export default function OrderHeader({OrderDetail, orderStatus, createdAt}) {
  const {orderNumber} = OrderDetail || {};

  return (
    <div className="border-b-2 pb-4">
      <div className="flex gap-4 py-2 pb-4">
        <h1 className="font-semibold text-3xl text-gray-700">
          Order# {orderNumber}
        </h1>
        <div className="flex gap-1 items-center p-2 rounded-lg text-indigo-600 bg-indigo-600 bg-opacity-10">
          <h4>Status :</h4>
          <p>{orderStatus}</p>
        </div>
      </div>
      <div className="py-2">
        <OrderTracker />
      </div>
      {/* FOR ORDER STATUS */}
      <div className="flex justify-between gap-5">
        <div className="flex gap-1 items-center">
          <h4 className="font-semibold">Order date :</h4>
          {/* <p>{createdAt ? format(new Date(createdAt), 'dd/MM/yyyy') : 'N/A'}</p> */}
          <p className="text-gray-600">{convertToLocalTime(createdAt)}</p>
        </div>
        <div className="flex gap-1">
          <h4 className="font-semibold">Estimated delivery :</h4>
          <p className="text-gray-600"> {'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
