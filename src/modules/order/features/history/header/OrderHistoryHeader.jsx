import {useState} from 'react';
import useOrder from '../../../../shared/hooks/useOrder';

export default function OrderHistoryHeader() {
  const [selectIndex, setSelectIndex] = useState(0);

  const {selectOrderList} = useOrder();

  const orderStatus = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Pending'},
    {id: 3, name: 'Processing'},
    {id: 4, name: 'Completed'},
    {id: 5, name: 'Cancelled'},
  ];

  const handleSelectIndex = (list) => {
    //useLoading ??
    const findIndex = orderStatus.findIndex((status) => status.id === list.id);
    setSelectIndex(findIndex);
    selectOrderList(findIndex);
  };

  return (
    <div className="border-r">
      <div className="flex flex-col items-start justify-start gap-1 text-xl py-5 pl-1 pr-16">
        {orderStatus.map((list, index) => (
          <button
            key={list.id}
            className={
              `hover:text-indigo-700 p-2 text-xl ` +
              (selectIndex === index ? 'text-indigo-700 font-semibold' : '')
            }
            onClick={() => handleSelectIndex(list)}
          >
            <h1>{list.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}
