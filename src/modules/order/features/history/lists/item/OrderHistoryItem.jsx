import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';

export default function OrderHistoryItem({order, onClick}) {
  const {
    orderStatus,
    createdAt,
    OrderDetail: {orderNumber},
    UserPayment: {amount},
  } = order;

  return (
    <div className="grid grid-cols-5 py-3 border-b-2 ">
      <div className="flex items-center">
        <h4>{orderNumber}</h4>
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
        <h4>{orderStatus}</h4>
      </div>

      <div className="flex items-center">
        <button
          className="flex justify-center border p-2 rounded-xl cursor-pointer hover:bg-cerulean-blue-800 hover:text-white"
          onClick={() => onClick(orderNumber)}
        >
          View Order
        </button>
      </div>
    </div>
  );
}
