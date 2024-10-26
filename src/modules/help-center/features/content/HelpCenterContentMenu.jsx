import {MdSearch, MdUploadFile} from 'react-icons/md';

export default function HelpCenterContentMenu() {
  const menuLists = [
    {id: 1, name: 'Track Order', icon: <MdSearch size={50} />},
    {id: 2, name: 'Payment Proof', icon: <MdUploadFile size={50} />},
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-24">
      {menuLists.map((list) => (
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-slate-100 hover:border-indigo-700">
          <span className="py-8">{list.icon}</span>
          <h1 className="pb-2 font-semibold">{list.name}</h1>
        </div>
      ))}
    </div>
  );
}
