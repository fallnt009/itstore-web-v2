import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';
import OrderHistoryStatus from './status/OrderHistoryStatus';

export default function OrderHistoryItem({order, onClick}) {
  const {
    orderStatus,
    createdAt,
    OrderDetail: {orderNumber},
    UserPayment: {amount},
  } = order;

  return (
    <div className="grid grid-cols-5 py-3 border-b">
      <div className="flex items-center">
        <h4>#{orderNumber}</h4>
      </div>
      <div className="flex items-center">
        <h4>{format(new Date(createdAt), 'dd/MM/yyyy')}</h4>
      </div>
      <div className="flex items-center">
        <h4>
          <NumericFormat
            value={amount}
            displayType="text"
            thousandSeparator=","
          />{' '}
          THB
        </h4>
      </div>
      <div className="flex items-center">
        <OrderHistoryStatus orderStatus={orderStatus} />
      </div>

      <div className="flex justify-center items-center">
        <button
          className="flex justify-center border p-2 rounded-xl cursor-pointer bg-indigo-700 text-white hover:text-indigo-700 hover:bg-white hover:border-indigo-700"
          onClick={() => onClick(orderNumber)}
        >
          View Order
        </button>
      </div>
    </div>
  );
}
