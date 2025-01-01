import {
  TRANSACTION_PENDING,
  TRANSACTION_AWAITING,
  TRANSACTION_COMPLETED,
  TRANSACTION_REJECTED,
} from '../../../../../../../shared/services/config/constants';

export default function PaymentStatus({status = 'PENDING'}) {
  const statusMapping = {
    [TRANSACTION_PENDING]: {
      title: 'Pending',
      color: 'text-yellow-500 border-yellow-500 bg-yellow-50',
    },
    [TRANSACTION_AWAITING]: {
      title: 'Processing',
      color: 'text-blue-500 border-blue-500 bg-blue-50',
    },
    [TRANSACTION_COMPLETED]: {
      title: 'Success',
      color: 'text-green-500 border-green-500 bg-green-50',
    },
    [TRANSACTION_REJECTED]: {
      title: 'Rejected',
      color: 'text-red-500 border-red-500 bg-red-50',
    },
  };

  const currentStatus = statusMapping[status] || {
    title: 'Unknown',
    color: 'text-gray-500 border-gray-500 bg-gray-50',
  };
  return (
    <div
      className={`w-[70px] border text-xs text-center rounded-lg p-0.5 ${currentStatus.color}`}
    >
      <p className="font-medium">{currentStatus.title}</p>
    </div>
  );
}
