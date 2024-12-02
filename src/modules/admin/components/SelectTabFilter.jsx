import {MdClose} from 'react-icons/md';

export default function SelectTabFilter() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div
          type="button"
          className="flex items-center gap-2 bg-blue-600 text-blue-700 bg-opacity-10 pl-3 py-2 rounded-xl  transition-all duration-200 select-none"
        >
          Active
          <span className="hover:bg-slate-300 rounded-full p-1 cursor-pointer">
            <MdClose />
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <select className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-400">
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-400">
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
        <select className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-400">
          <option>Highest Price</option>
          <option>Lowest Price</option>
        </select>
        <button className="p-2 px-4 border rounded-xl bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointe">
          Submit
        </button>
      </div>
    </div>
  );
}
