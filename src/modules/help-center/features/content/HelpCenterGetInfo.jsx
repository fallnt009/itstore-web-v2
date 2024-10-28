import {useState} from 'react';

import OrderInfoContainer from './info/order/OrderInfoContainer';
import PaymentContainer from './info/payment/PaymentContainer';
import ParcelContainer from './info/parcel/ParcelContainer';
import WarrantyContainer from './info/warranty/WarrantyContainer';

export default function HelpCenterGetInfo() {
  const [selectedInfoId, setSelectedInfoId] = useState(1);

  const infoLists = [
    {id: 1, title: 'Order'},
    {id: 2, title: 'Payment'},
    {id: 3, title: 'Parcel Services'},
    {id: 4, title: 'Warranty'},
  ];

  const handleToggleList = (id) => {
    setSelectedInfoId(id);
  };
  return (
    <div className="py-10 px-24">
      <div>
        <h1 className="text-2xl font-semibold">Get more Information</h1>
      </div>
      <div className="flex gap-4 py-5">
        {infoLists.map((info) => (
          <div
            className={`p-4 border-2 rounded-lg cursor-pointer hover:bg-slate-100 hover:border-indigo-700 ${
              info.id === selectedInfoId ? 'border-indigo-700' : ''
            }`}
            key={info.id}
            onClick={() => handleToggleList(info.id)}
          >
            <h1 className="font-semibold">{info.title}</h1>
          </div>
        ))}
      </div>

      <div>
        {selectedInfoId === 1 && <OrderInfoContainer />}
        {selectedInfoId === 2 && <PaymentContainer />}
        {selectedInfoId === 3 && <ParcelContainer />}
        {selectedInfoId === 4 && <WarrantyContainer />}
      </div>
    </div>
  );
}
