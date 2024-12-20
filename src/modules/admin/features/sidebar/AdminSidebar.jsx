import {useNavigate} from 'react-router-dom';
import {MdDashboard} from 'react-icons/md';

import {
  ADMIN_CATEGORY,
  ADMIN_DASHBOARD,
  ADMIN_PRODUCT,
} from '../../../shared/services/config/routing';

export default function AdminSidebar() {
  const navigate = useNavigate();
  // have
  const lists = [
    {id: 1, title: 'Dashboard', path: ADMIN_DASHBOARD, icon: <MdDashboard />},
    {id: 2, title: 'Product', path: ADMIN_PRODUCT, icon: ''},
    {id: 3, title: 'Order', path: '', icon: ''},
    {id: 4, title: 'Customer', path: '', icon: ''},
    {id: 5, title: 'Payment', path: '', icon: ''},
    {id: 6, title: 'Inventory', path: '', icon: ''},
    {id: 7, title: 'Discount', path: '', icon: ''},
    {id: 8, title: 'Category', path: ADMIN_CATEGORY, icon: ''},
    {id: 9, title: 'Settings', path: '', icon: ''},
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col gap-3 pr-5 pb-5">
      {lists.map((item) => (
        <button
          className="flex items-center justify-start gap-2 p-2 px-4 rounded-lg font-semibold bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          key={item.id}
          onClick={() => handleNavigate(item.path)}
        >
          <span>{item.icon}</span>
          <h1>{item.title}</h1>
        </button>
      ))}
    </div>
  );
}
