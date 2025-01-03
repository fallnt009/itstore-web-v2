import {MdSort, MdMoreHoriz, MdImportExport} from 'react-icons/md';

export default function OrderContentFilters() {
  const filterLists = [
    {id: 1, title: 'pageSize', icon: <MdSort />},
    {id: 2, title: 'sorts', icon: <MdImportExport />},
    {id: 3, title: 'more', icon: <MdMoreHoriz />},
  ];

  //pageSize
  //sort select asc , desc
  //more
  return (
    <div className="flex gap-2">
      {filterLists.map((item) => (
        <button
          className="border rounded-lg p-1.5 hover:bg-blue-100"
          key={item.id}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
