import {useNavigate} from 'react-router-dom';

import {ADMIN_PRODUCT_CREATE} from '../../../../shared/services/config/routing';

export default function AdminProductNavBar() {
  const navigate = useNavigate();

  const navList = [
    {
      id: 1,
      title: 'Add Product',
      path: ADMIN_PRODUCT_CREATE,
    },
    {
      id: 2,
      title: 'Add Category',
      path: '',
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <ul className="flex gap-2 font-semibold">
      {navList.map((item) => (
        <li
          className="p-2 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
          key={item.id}
          onClick={() => handleNavigate(item.path)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
