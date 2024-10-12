import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../../../../../shared/services/config/constants';

export default function OrderHistoryStatus({orderStatus}) {
  const statusMapping = {
    [ORDER_PENDING]: {name: 'Pending', styles: 'bg-yellow-500 text-yellow-600'},
    [ORDER_PROCESSING]: {
      name: 'Processing',
      styles: 'bg-green-500 text-green-600',
    },
    [ORDER_COMPLETED]: {
      name: 'Completed',
      styles: 'bg-green-500 text-green-600',
    },
    [ORDER_CANCELED]: {name: 'Cancelled', styles: 'bg-red-500 text-red-600'},
  };
  const {name, styles} = statusMapping[orderStatus] || {name: 'Pending'};

  return (
    <div
      className={`flex gap-1 items-center p-2 rounded-lg ${styles} bg-opacity-20`}
    >
      <p>{name}</p>
    </div>
  );
}
