import {MdDashboard} from 'react-icons/md';

export default function AdminSidebar() {
  // have
  const lists = [
    {id: 1, title: 'Dashboard', navigate: '', icon: <MdDashboard />},
    {id: 2, title: 'Product', navigate: '', icon: ''},
    {id: 3, title: 'Order', navigate: '', icon: ''},
    {id: 4, title: 'Customer', navigate: '', icon: ''},
    {id: 5, title: 'Payment', navigate: '', icon: ''},
    {id: 6, title: 'Inventory', navigate: '', icon: ''},
    {id: 7, title: 'Discount', navigate: '', icon: ''},
    {id: 8, title: 'Tags', navigate: '', icon: ''},
    {id: 9, title: 'Settings', navigate: '', icon: ''},
  ];
  return (
    <div className="flex flex-col gap-3 pr-5 pb-5">
      {lists.map((item) => (
        <button
          className="flex items-center justify-start gap-2 p-2 px-4 rounded-lg font-semibold bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          key={item.id}
        >
          <span>{item.icon}</span>
          <h1>{item.title}</h1>
        </button>
      ))}
    </div>
  );
}
