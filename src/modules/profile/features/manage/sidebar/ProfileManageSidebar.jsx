import {MdHome, MdAccountCircle} from 'react-icons/md';

export default function ProfileManageSidebar({index, onClick}) {
  const list = [{id: 1, title: 'Account', icon: <MdAccountCircle size={35} />}];
  return (
    <div>
      <div className="flex items-center gap-1 py-3 px-3 hover:bg-slate-200 cursor-pointer">
        <span className="text-gray-500">
          <MdHome size={35} />
        </span>
        <h1 className="text-gray-500 font-semibold text-lg">Home</h1>
      </div>
      <div className="border-t">
        <h1 className="text-gray-500 py-2 px-3 font-semibold text-xs">
          GENERAL
        </h1>
        {list.map((list, listIndex) => (
          <div
            className={`flex items-center gap-2 py-3 px-3 hover:bg-slate-200 cursor-pointer ${
              listIndex === index ? 'bg-slate-200' : ''
            }`}
            key={list.id}
            onClick={() => onClick(listIndex)}
          >
            <span className="text-gray-500">{list.icon}</span>
            <h1 className="text-gray-500 font-semibold text-lg">
              {list.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
