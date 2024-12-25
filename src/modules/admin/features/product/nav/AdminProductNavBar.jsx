import {useNavigate} from 'react-router-dom';
import {MdAdd} from 'react-icons/md';

import {ADMIN_PRODUCT_CREATE} from '../../../../shared/services/config/routing';

export default function AdminProductNavBar() {
  const navigate = useNavigate();

  const navList = [
    {
      id: 1,
      title: 'Add Product',
      path: ADMIN_PRODUCT_CREATE,
      icon: <MdAdd />,
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <ul className="flex gap-2 font-semibold">
      {navList.map((item) => (
        <li
          className="flex items-center gap-2 p-2 border rounded-lg hover:bg-white bg-blue-100 text-blue-600 cursor-pointer"
          key={item.id}
          onClick={() => handleNavigate(item.path)}
        >
          <span>{item.icon}</span>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
