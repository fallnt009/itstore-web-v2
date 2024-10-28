import {Link} from 'react-router-dom';
import {MdSearch, MdUploadFile} from 'react-icons/md';

import {
  TRACKING_ORDER,
  PAYMENT_PROOF,
} from '../../../shared/services/config/routing';

export default function HelpCenterContentMenu() {
  const menuLists = [
    {
      id: 1,
      name: 'Track Order',
      icon: <MdSearch size={50} />,
      link: TRACKING_ORDER,
    },
    {
      id: 2,
      name: 'Payment Proof',
      icon: <MdUploadFile size={50} />,
      link: PAYMENT_PROOF,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-24">
      {menuLists.map((list) => (
        <Link
          className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-slate-100 hover:border-indigo-700
          "
          key={list.id}
          to={list.link}
        >
          <span className="py-8">{list.icon}</span>
          <h1 className="pb-2 font-semibold">{list.name}</h1>
        </Link>
      ))}
    </div>
  );
}
