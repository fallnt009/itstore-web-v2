import {Link} from 'react-router-dom';
import {
  MdHome,
  MdEmojiEvents,
  MdLiveHelp,
  MdMyLocation,
  MdUploadFile,
} from 'react-icons/md';

import {
  HOME,
  TRACKING_ORDER,
  PAYMENT_PROOF,
  HELP_CENTER,
} from '../../../services/config/routing';

export default function NavBarMenuList() {
  const menuLists = [
    {id: 1, title: 'Home', icon: <MdHome />, path: HOME},
    {id: 2, title: 'Events', icon: <MdEmojiEvents />, path: '/'},
    {
      id: 3,
      title: 'Tracking your order',
      icon: <MdMyLocation />,
      path: TRACKING_ORDER,
    },
    {
      id: 4,
      title: 'Upload your proof',
      icon: <MdUploadFile />,
      path: PAYMENT_PROOF,
    },
    {id: 5, title: 'Need Help ?', icon: <MdLiveHelp />, path: HELP_CENTER},
  ];
  return (
    <>
      {menuLists.map((list) => (
        <Link
          className="flex gap-2 items-center bg-slate-100 hover:bg-blue-100 p-2 rounded-lg text-gray-700"
          key={list.id}
          to={list.path}
        >
          <span>{list.icon}</span>
          <h1 className="font-semibold">{list.title}</h1>
        </Link>
      ))}
    </>
  );
}
