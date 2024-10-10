import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../../../../shared/services/config/constants';

export default function OrderHeaderStatus({orderStatus}) {
  const statusMapping = {
    [ORDER_PENDING]: {name: 'Pending'},
    [ORDER_PROCESSING]: {name: 'Processing'},
    [ORDER_COMPLETED]: {name: 'Completed'},
    [ORDER_CANCELED]: {name: 'Cancelled'},
  };

  const {name} = statusMapping[orderStatus] || {name: 'Pending'};
  return (
    <div className="flex gap-1 items-center p-2 rounded-lg text-indigo-600 bg-indigo-600 bg-opacity-10">
      <h4>Status :</h4>
      <p>{name}</p>
    </div>
  );
}
