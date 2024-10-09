import {useState} from 'react';
import useOrder from '../../../../shared/hooks/useOrder';

export default function OrderHistoryHeader() {
  const [selectIndex, setSelectIndex] = useState(0);

  const {selectOrderList} = useOrder();

  const orderStatus = [
    {id: 1, name: 'Pending'},
    {id: 2, name: 'Processing'},
    {id: 3, name: 'Completed'},
  ];

  const handleSelectIndex = (list) => {
    //useLoading ??
    const findIndex = orderStatus.findIndex((status) => status.id === list.id);
    setSelectIndex(findIndex);
    selectOrderList(findIndex);
  };

  return (
    <div className="border-r">
      <div>
        <h1 className="font-semibold text-4xl text-cerulean-blue-800">
          Order History
        </h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-1 text-xl py-5 pl-1 pr-16">
        {orderStatus.map((list, index) => (
          <button
            key={list.id}
            className={
              `hover:text-cerulean-blue-800 py-2 text-xl ` +
              (selectIndex === index
                ? 'text-cerulean-blue-800 font-semibold'
                : '')
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
