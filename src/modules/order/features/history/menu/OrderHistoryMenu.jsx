import {useCallback} from 'react';

import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../../../shared/services/config/constants';

export default function OrderHistoryMenu({status, setFilter, setStatus}) {
  const id = status?.id || 1;

  const orderStatus = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Pending', filter: ORDER_PENDING},
    {id: 3, name: 'Processing', filter: ORDER_PROCESSING},
    {id: 4, name: 'Completed', filter: ORDER_COMPLETED},
    {id: 5, name: 'Cancelled', filter: ORDER_CANCELED},
  ];

  const handleSelectIndex = useCallback(
    (filter, status) => {
      setStatus(status);
      setFilter(filter);
    },
    [setFilter, setStatus]
  );

  return (
    <div className="border-r">
      <div className="flex flex-col items-start justify-start gap-1 text-xl py-5 pl-1 pr-16">
        {orderStatus.map((list) => (
          <button
            key={list.id}
            className={`hover:text-indigo-700 p-2 text-xl ${
              list.id === id ? 'text-indigo-700 font-semibold' : ''
            }
`}
            onClick={() => handleSelectIndex(list.filter, list)}
          >
            <h1>{list.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}
