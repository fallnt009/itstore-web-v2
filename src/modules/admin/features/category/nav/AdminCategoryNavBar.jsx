export default function AdminCategoryNavBar({selectedNavId, onSelect}) {
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

  return (
    <ul className="flex gap-2 font-semibold">
      {navList.map((item) => (
        <li
          className={`p-2 border rounded-lg  hover:bg-blue-100 hover:text-blue-600 cursor-pointer ${
            selectedNavId === item.id
              ? 'text-blue-600 bg-blue-100'
              : 'bg-slate-100 text-gray-700'
          }`}
          key={item.id}
          onClick={() => onSelect(item.id)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
