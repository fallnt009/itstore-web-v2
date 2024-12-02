import {MdSearch} from 'react-icons/md';

export default function SearchInput() {
  return (
    <div className="relative w-1/4">
      <input
        className="p-2 w-full bg-white border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-400"
        placeholder="search..."
      ></input>
      <i className="absolute text-slate-400 top-3 left-[270px]">
        <MdSearch size={20} />
      </i>
    </div>
  );
}
