import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';

import OrderHistoryStatus from './status/OrderHistoryStatus';

import {
  TRANSACTION_PENDING,
  TRANSACTION_AWAITING,
  TRANSACTION_COMPLETED,
  TRANSACTION_REJECTED,
} from '../../../../../shared/services/config/constants';

export default function OrderHistoryItem({order, onClick}) {
  const {
    orderStatus,
    createdAt,
    OrderDetail: {orderNumber},
    UserPayment: {amount, paymentStatus},
  } = order;

  const PaymentStatusRender = (status) => {
    if (status === TRANSACTION_PENDING) {
      return <button className="text-red-600">Pay</button>;
    } else if (status === TRANSACTION_AWAITING) {
      return <h1 className="text-yellow-600">Awating</h1>;
    } else if (status === TRANSACTION_COMPLETED) {
      return <h1 className="text-green-600">Completed</h1>;
    } else if (status === TRANSACTION_REJECTED) {
      return <h1 className="text-red-600">Rejected</h1>;
    } else {
      return;
    }
  };

  return (
    <div className="grid grid-cols-6 py-3 border-b">
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
      <div className="flex items-center">
        {PaymentStatusRender(paymentStatus)}
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
