export default function AdminOrderContentTab({selected = 1}) {
  const menuLists = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Unreviewed'},
    {id: 3, title: 'Unpaid'},
    {id: 4, title: 'Paid'},
    {id: 5, title: 'Completed'},
    {id: 6, title: 'Canceled'},
  ];
  return (
    <ul className="flex gap-1 rounded-lg bg-gray-100 p-0.5">
      {menuLists.map((item) => (
        <li
          className={`p-1 px-4 rounded-lg text-sm cursor-pointer hover:bg-white  ${
            selected === item.id ? 'bg-white font-medium' : 'text-gray-500'
          }`}
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
