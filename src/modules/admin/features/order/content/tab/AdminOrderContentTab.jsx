import {useState, useCallback} from 'react';

export default function AdminOrderContentTab({onToggle}) {
  //nav control
  const [selectedTab, setSelectedTab] = useState(1);

  const menuLists = [
    {id: 1, title: 'All', type: ''},
    {id: 2, title: 'Unreviewed', type: 'unreviewed'},
    {id: 3, title: 'Unpaid', type: 'unpaid'},
    {id: 4, title: 'Paid', type: 'paid'},
    {id: 5, title: 'Completed', type: 'completed'},
    {id: 6, title: 'Canceled', type: 'canceled'},
  ];

  const handleSelectedOnClick = useCallback(
    (id, type) => {
      setSelectedTab(id);
      //handle send filters here
      onToggle(type);
    },
    [onToggle]
  );

  return (
    <ul className="flex gap-1 rounded-lg bg-gray-100 p-0.5">
      {menuLists.map((item) => (
        <li
          className={`p-1 px-4 rounded-lg text-sm cursor-pointer hover:bg-white  ${
            selectedTab === item.id ? 'bg-white font-medium' : 'text-gray-500'
          }`}
          key={item.id}
          onClick={() => handleSelectedOnClick(item.id, item.type)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
