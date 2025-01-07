import {
  TRANSACTION_PENDING,
  TRANSACTION_AWAITING,
  TRANSACTION_COMPLETED,
  TRANSACTION_REJECTED,
} from '../../../shared/services/config/constants';

export default function PaymentStatus({status = 'PENDING'}) {
  const statusMapping = {
    [TRANSACTION_PENDING]: {
      title: 'Pending',
      color: 'text-yellow-600 border-yellow-500 bg-yellow-200 bg-opacity-50',
    },
    [TRANSACTION_AWAITING]: {
      title: 'Processing',
      color: 'text-blue-600 border-blue-500 bg-blue-200 bg-opacity-50',
    },
    [TRANSACTION_COMPLETED]: {
      title: 'Success',
      color: 'text-green-600 border-green-500 bg-green-200 bg-opacity-50',
    },
    [TRANSACTION_REJECTED]: {
      title: 'Rejected',
      color: 'text-red-600 border-red-500 bg-red-200 bg-opacity-50',
    },
  };

  const currentStatus = statusMapping[status] || {
    title: 'Unknown',
    color: 'text-gray-600 border-gray-500 bg-gray-200 bg-opacity-50',
  };
  return (
    <span
      className={`uppercase text-xs font-bold rounded-lg p-1.5 ${currentStatus.color}`}
    >
      {currentStatus.title}
    </span>
  );
}
