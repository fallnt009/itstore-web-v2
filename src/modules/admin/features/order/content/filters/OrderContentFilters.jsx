import {MdFilterList, MdMoreHoriz, MdImportExport} from 'react-icons/md';

export default function OrderContentFilters() {
  const filterLists = [
    {id: 1, title: 'filter', icon: <MdFilterList />},
    {id: 2, title: 'sorts', icon: <MdImportExport />},
    {id: 3, title: 'more', icon: <MdMoreHoriz />},
  ];
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
