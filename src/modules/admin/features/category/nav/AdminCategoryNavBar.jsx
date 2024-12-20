import {useNavigate} from 'react-router-dom';

export default function AdminCategoryNavBar() {
  const navigate = useNavigate();

  const navList = [
    {
      id: 1,
      title: 'Brand',
      path: '',
    },
    {
      id: 2,
      title: 'Category',
      path: '',
    },
    {
      id: 3,
      title: 'Sub Category',
      path: '',
    },
    {
      id: 4,
      title: 'Tags',
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
